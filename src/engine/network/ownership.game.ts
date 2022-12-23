import { addComponent, hasComponent } from "bitecs";

import { sliceCursorView, CursorView, writeUint32, readUint32, createCursorView } from "../allocator/CursorView";
import { addChild, removeNode } from "../component/transform";
import { NOOP } from "../config.common";
import { GameState } from "../GameTypes";
import { getModule } from "../module/module.common";
import { RemoteNodeComponent } from "../node/node.game";
import { RigidBody } from "../physics/physics.game";
import { getPrefabTemplate, Prefab } from "../prefab/prefab.game";
import { RemoteNode } from "../resource/resource.game";
import { GameNetworkState, Networked, NetworkModule, Owned } from "./network.game";
import { NetworkAction } from "./NetworkAction";
import { broadcastReliable } from "./outbound.game";
import { writeMetadata, NetPipeData } from "./serialization.game";

const messageView = createCursorView(new ArrayBuffer(Uint32Array.BYTES_PER_ELEMENT * 3));

export const createRemoveOwnershipMessage = (ctx: GameState, eid: number) => {
  writeMetadata(NetworkAction.RemoveOwnershipMessage)([ctx, messageView]);
  serializeRemoveOwnership(messageView, eid);
  return sliceCursorView(messageView);
};

export const serializeRemoveOwnership = (cv: CursorView, eid: number) => {
  writeUint32(cv, Networked.networkId[eid]);
};

export const deserializeRemoveOwnership = (input: NetPipeData) => {
  const [ctx, cv] = input;
  const network = getModule(ctx, NetworkModule);
  const nid = readUint32(cv);
  const eid = network.networkIdToEntityId.get(nid);
  const node = eid ? RemoteNodeComponent.get(eid) : undefined;
  if (node) {
    removeNode(ctx.world, node);
  }
};

export const takeOwnership = (ctx: GameState, network: GameNetworkState, node: RemoteNode): number => {
  const eid = node.eid;

  if (!hasComponent(ctx.world, Owned, eid)) {
    removeNode(ctx.world, node);

    const prefabName = Prefab.get(eid);
    if (!prefabName) throw new Error("could not take ownership, prefab name not found: " + prefabName);

    const newNode = getPrefabTemplate(ctx, prefabName).create(ctx);
    const newEid = newNode.eid;

    const body = RigidBody.store.get(eid);
    if (!body) throw new Error("rigidbody not found for eid: " + eid);

    newNode.position.set(node.position);
    newNode.scale.set(node.scale);
    newNode.quaternion.set(node.quaternion);

    addComponent(ctx.world, Owned, newEid);
    addComponent(ctx.world, Networked, newEid);

    if (!ctx.activeScene) {
      throw new Error("No active scene set.");
    }

    addChild(ctx.activeScene, newNode);

    // send message to remove on other side
    broadcastReliable(ctx, network, createRemoveOwnershipMessage(ctx, eid));

    return newEid;
  }

  return NOOP;
};
