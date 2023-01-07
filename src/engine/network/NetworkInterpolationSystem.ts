import { RigidBody as RapierRigidBody } from "@dimforge/rapier3d-compat";
import { defineQuery, enterQuery, exitQuery, Not } from "bitecs";
import { Vector3, Quaternion } from "three";
import { quat, vec3 } from "gl-matrix";

import { GameState } from "../GameTypes";
import { RigidBody } from "../physics/physics.game";
import { GameNetworkState, getPeerIndexFromNetworkId, Networked, NetworkModule, Owned } from "./network.game";
import { getModule } from "../module/module.common";
import {
  INTERP_BUFFER_MS,
  INTERP_AMOUNT_MS,
  addEntityToHistorian,
  getEntityHistory,
  removeEntityFromHistorian,
} from "./Historian";
import { addEntityHistory, syncWithHistorian } from "./InterpolationBuffer";
import { clamp } from "../utils/interpolation";
import { isHost } from "./network.common";
import { getRemoteResource, RemoteNode } from "../resource/resource.game";

export const remoteEntityQuery = defineQuery([Networked, Not(Owned)]);
export const enteredRemoteEntityQuery = enterQuery(remoteEntityQuery);
export const exitedRemoteEntityQuery = exitQuery(remoteEntityQuery);

const getPeerIdFromEntityId = (network: GameNetworkState, eid: number) => {
  const pidx = getPeerIndexFromNetworkId(Networked.networkId[eid]);
  const peerId = network.indexToPeerId.get(pidx) || network.entityIdToPeerId.get(eid);
  return peerId;
};

const _vec = new Vector3();
const _quat = new Quaternion();

export function NetworkInterpolationSystem(ctx: GameState) {
  const network = getModule(ctx, NetworkModule);

  const entered = enteredRemoteEntityQuery(ctx.world);
  for (let i = 0; i < entered.length; i++) {
    const eid = entered[i];
    const node = getRemoteResource<RemoteNode>(ctx, eid);
    const body = RigidBody.store.get(eid);
    if (node && body) {
      applyNetworkedToEntity(node, body);

      // add to historian
      console.log("Networked.networkId[eid]", Networked.networkId[eid]);
      const pidx = getPeerIndexFromNetworkId(Networked.networkId[eid]);
      console.log("pidx", pidx);
      const peerId = network.indexToPeerId.get(pidx);
      if (!peerId) {
        throw new Error("peer not found for entity " + eid);
      }
      const historian = network.peerIdToHistorian.get(peerId);
      if (!historian) {
        throw new Error("historian not found for peer " + peerId);
      }
      addEntityToHistorian(historian, eid);
    }
  }

  preprocessHistorians(ctx, network);

  // lerp rigidbody towards network transform for remote networked entities
  const entities = remoteEntityQuery(ctx.world);
  for (let i = 0; i < entities.length; i++) {
    const eid = entities[i];
    const node = getRemoteResource<RemoteNode>(ctx, eid);

    if (!node) {
      console.warn("could not find node for:", eid);
      continue;
    }

    const body = RigidBody.store.get(eid);

    if (!network.interpolate) {
      applyNetworkedToEntity(node, body);
      continue;
    }

    if (!body) {
      console.warn("could not find rigidbody for:", eid);
      continue;
    }

    const peerId = getPeerIdFromEntityId(network, eid);
    if (peerId === undefined) {
      console.warn("could not find peerId for:", eid);
      continue;
    }

    const historian = network.peerIdToHistorian.get(peerId);
    if (historian === undefined) {
      console.warn("could not find historian for:", peerId);
      applyNetworkedToEntity(node, body);
      // console.warn("could not find historian for:", peerId);
      continue;
    }

    const position = node.position;
    const quaternion = node.quaternion;
    const velocity = RigidBody.velocity[eid];

    const netPosition = Networked.position[eid];
    const netVelocity = Networked.velocity[eid];
    const netQuaternion = Networked.quaternion[eid];

    const history = getEntityHistory(historian, eid);

    if (historian.needsUpdate) {
      // append current network values to interpolation buffer
      addEntityHistory(history, netPosition, netVelocity, netQuaternion);
    }

    // drop old history
    syncWithHistorian(history, historian);

    if (historian.index === -1) {
      continue;
    }

    // if interpolation is disabled
    if (!network.interpolate) {
      // and we have new state to apply from the authority
      if (historian.needsUpdate) {
        // if CSP is enabled and its our entity, apply update only the position
        if (network.clientSidePrediction && eid === network.peerIdToEntityId.get(network.peerId)) {
          position.set(netPosition);
          body.setTranslation(_vec.fromArray(netPosition), true);
        } else {
          // otherwise update the entire transform
          applyNetworkedToEntity(node, body);
        }
      }
      continue;
    }

    // if CSP enabled and its our player
    // TODO: once Authoring is implemented, check Owned instead of checking peerId's eid
    if (network.clientSidePrediction && eid === network.peerIdToEntityId.get(network.peerId)) {
      // then apply the update directly (rubberbanding upon prediction error)
      if (historian.needsUpdate) {
        position.set(netPosition);
        body.setTranslation(_vec.fromArray(netPosition), true);
      }
      continue;
    }

    // TODO: optional hermite interpolation

    const from = historian.index || 0;
    const to = (historian.index || 0) - 1;

    const pFrom = history.position.at(from);
    const pTo = history.position.at(to);
    if (pFrom && pTo) {
      vec3.lerp(position, pFrom, pTo, historian.fractionOfTimePassed);
      body.setTranslation(_vec.fromArray(position), true);
    }

    if (body.isDynamic()) {
      const vFrom = history.velocity.at(from);
      const vTo = history.velocity.at(to);
      if (vFrom && vTo) {
        vec3.lerp(velocity, vFrom, vTo, historian.fractionOfTimePassed);
        body.setLinvel(_vec.fromArray(velocity), true);
      }
    }

    // if CSP is enabled, skip applying rotation data from the host for our locally controlled entity
    if (
      network.authoritative &&
      !isHost(network) &&
      network.clientSidePrediction &&
      eid === network.peerIdToEntityId.get(network.peerId)
    ) {
      continue;
    }

    const qFrom = history.quaternion.at(from);
    const qTo = history.quaternion.at(to);
    if (qFrom && qTo) {
      quat.slerp(quaternion, qFrom, qTo, historian.fractionOfTimePassed);
      body.setRotation(_quat.fromArray(quaternion), true);
    }
  }

  const exited = exitedRemoteEntityQuery(ctx.world);
  for (let i = 0; i < exited.length; i++) {
    const eid = exited[i];
    // remove from historian
    const pidx = getPeerIndexFromNetworkId(Networked.networkId[eid]);
    const peerId = network.indexToPeerId.get(pidx);
    if (!peerId) continue;
    const historian = network.peerIdToHistorian.get(peerId);
    if (!historian) continue;
    removeEntityFromHistorian(historian, eid);
  }

  postprocessHistorians(ctx, network);
}

function preprocessHistorians(ctx: GameState, network: GameNetworkState) {
  for (const [, historian] of network.peerIdToHistorian) {
    if (historian.needsUpdate) {
      historian.latency = Date.now() - historian.latestTime;
      // add timestamp to historian
      historian.timestamps.unshift(historian.latestTime);
    }

    const trimTime = historian.localTime - INTERP_BUFFER_MS;

    const targetTime = (historian.targetTime = historian.localTime - INTERP_AMOUNT_MS);

    // step forward local time
    historian.localTime += ctx.dt * 1000;

    let index = -1;
    if (historian.timestamps.length > 2) {
      for (let i = historian.timestamps.length - 1; i >= 0; i--) {
        const t = historian.timestamps[i];
        const tt = historian.timestamps[i - 1];

        if (t < trimTime) {
          historian.timestamps.splice(i);
          continue;
        }

        index = i;

        if (t < targetTime && tt > targetTime) {
          break;
        }
      }
      if (index === -1) {
        console.warn("interpolation buffer full");
        continue;
      }
    }

    historian.index = index;

    const fromTime = historian.timestamps.at(index) || 0;
    const toTime = historian.timestamps.at(index - 1) || 0;

    const ratio = (targetTime - fromTime) / (toTime - fromTime);

    historian.fractionOfTimePassed = clamp(0, 1, ratio);
  }
}

function postprocessHistorians(ctx: GameState, network: GameNetworkState) {
  for (const [, historian] of network.peerIdToHistorian) {
    historian.needsUpdate = false;
  }
}

function applyNetworkedToEntity(node: RemoteNode, body?: RapierRigidBody) {
  const eid = node.eid;
  const netPosition = Networked.position[eid];
  const netQuaternion = Networked.quaternion[eid];
  const netVelocity = Networked.velocity[eid];

  node.position.set(netPosition);
  node.quaternion.set(netQuaternion);

  if (body) {
    body.setTranslation(_vec.fromArray(netPosition), true);
    if (body.isDynamic()) body.setLinvel(_vec.fromArray(netVelocity), true);
    body.setRotation(_quat.fromArray(netQuaternion), true);
  }
}
