import { defineConfig } from "./module/module.common";
import { AudioModule } from "./audio/audio.game";
import { InputModule, ResetInputSystem } from "./input/input.game";
import { ApplyInputSystem } from "./input/ApplyInputSystem";
import { PhysicsModule, PhysicsSystem } from "./physics/physics.game";
import { NetworkExitWorldQueueSystem, NetworkModule } from "./network/network.game";
import { ActionMappingSystem } from "./input/ActionMappingSystem";
import {
  KinematicCharacterControllerModule,
  KinematicCharacterControllerSystem,
} from "../plugins/KinematicCharacterController";
import { GameWorkerStatsSystem, StatsModule } from "./stats/stats.game";
import {
  EditorModule,
  //EditorSelectionSystem,
  EditorStateSystem,
} from "./editor/editor.game";
import { GameState } from "./GameTypes";
import { RendererModule } from "./renderer/renderer.game";
import { SpawnablesModule } from "../plugins/spawnables/spawnables.game";
import {
  RecycleResourcesSystem,
  ResourceDisposalSystem,
  ResourceLoaderSystem,
  ResourceModule,
  ResourceTickSystem,
} from "./resource/resource.game";
import { ThirdRoomModule, ThirdroomSystem } from "../plugins/thirdroom/thirdroom.game";
import { UpdateMatrixWorldSystem } from "./component/transform";
import { FlyCharacterControllerModule, FlyControllerSystem } from "../plugins/FlyCharacterController";
import { NetworkInterpolationSystem } from "./network/NetworkInterpolationSystem";
import { PrefabDisposalSystem, PrefabModule } from "./prefab/prefab.game";
import { AnimationSystem } from "./animation/animation.game";
import {
  InteractionModule,
  InteractionSystem,
  ResetInteractablesSystem,
} from "../plugins/interaction/interaction.game";
import { NametagModule, NametagSystem } from "../plugins/nametags/nametags.game";
import { ScriptingSystem } from "./scripting/scripting.game";
import { GameResourceSystem } from "./resource/GameResourceSystem";
import { RemoteCameraSystem } from "./camera/camera.game";
import { InboundNetworkSystem } from "./network/inbound.game";
import { OutboundNetworkSystem } from "./network/outbound.game";
import { GLTFResourceDisposalSystem } from "./gltf/gltf.game";
import { IncomingTripleBufferSystem } from "./resource/IncomingTripleBufferSystem";
import { OutgoingTripleBufferSystem } from "./resource/OutgoingTripleBufferSystem";
import { SkipRenderLerpSystem } from "./component/SkipRenderLerpSystem";
import { SetWebXRReferenceSpaceSystem, WebXRAvatarRigSystem } from "./input/WebXRAvatarRigSystem";
import { XRInteractionSystem } from "../plugins/interaction/XRInteractionSystem";
import { MatrixModule } from "./matrix/matrix.game";
import { WebSGNetworkModule } from "./network/scripting.game";
import { WebSGUIModule } from "./ui/ui.game";
import { CameraRigModule, CameraRigSystem } from "../plugins/camera/CameraRig.game";
import { ActionBarSystem } from "../plugins/thirdroom/action-bar.game";

export default defineConfig<GameState>({
  modules: [
    PrefabModule,
    ResourceModule,
    InputModule,
    PhysicsModule,
    AudioModule,
    NetworkModule,
    StatsModule,
    EditorModule,
    RendererModule,
    ThirdRoomModule,
    MatrixModule,
    CameraRigModule,
    KinematicCharacterControllerModule,
    FlyCharacterControllerModule,
    InteractionModule,
    SpawnablesModule,
    NametagModule,
    WebSGNetworkModule,
    WebSGUIModule,
  ],
  systems: [
    IncomingTripleBufferSystem,

    ApplyInputSystem,
    WebXRAvatarRigSystem,
    ActionMappingSystem,

    InboundNetworkSystem,

    CameraRigSystem,

    KinematicCharacterControllerSystem,
    FlyControllerSystem,
    SetWebXRReferenceSpaceSystem,
    InteractionSystem,
    XRInteractionSystem,
    ActionBarSystem,
    ThirdroomSystem,

    // step physics forward and copy rigidbody data to transform component
    PhysicsSystem,

    // interpolate towards authoritative state
    NetworkInterpolationSystem,

    ScriptingSystem,

    AnimationSystem,

    UpdateMatrixWorldSystem,

    NametagSystem,
    EditorStateSystem,
    //EditorSelectionSystem,

    OutboundNetworkSystem,
    NetworkExitWorldQueueSystem,

    RemoteCameraSystem,
    PrefabDisposalSystem,
    GLTFResourceDisposalSystem,

    ResetInteractablesSystem,
    ResetInputSystem,
    GameWorkerStatsSystem,

    GameResourceSystem, // Commit Resources to TripleBuffer
    ResourceTickSystem,
    OutgoingTripleBufferSystem, // Swap write triplebuffers
    RecycleResourcesSystem, // Drain entity recycle queues. Call removeEntity if released by other threads.
    ResourceDisposalSystem, // Drain entity disposal queues. Enqueue into shared ringbuffers.
    ResourceLoaderSystem, // Drain entity creation queue. postMessage to other threads.

    SkipRenderLerpSystem, // Change node.skipLerp after commit
  ],
});
