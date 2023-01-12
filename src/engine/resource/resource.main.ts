import { AudioModule } from "../audio/audio.main";
import { IMainThreadContext } from "../MainThread";
import { getModule } from "../module/module.common";
import { toArrayBuffer } from "../utils/arraybuffer";
import { defineLocalResourceClass } from "./LocalResourceClass";
import { createLocalResourceModule, ResourceId } from "./resource.common";
import {
  AccessorComponentType,
  AccessorResource,
  AnimationChannelResource,
  AnimationResource,
  AnimationSamplerResource,
  AudioDataResource,
  AudioEmitterOutput,
  AudioEmitterResource,
  AudioEmitterType,
  AudioSourceResource,
  BufferResource,
  BufferViewResource,
  CameraResource,
  EnvironmentResource,
  ImageResource,
  InstancedMeshResource,
  InteractableResource,
  LightMapResource,
  LightResource,
  MaterialResource,
  MeshPrimitiveResource,
  MeshResource,
  NametagResource,
  NodeResource,
  ReflectionProbeResource,
  ResourceType,
  SamplerResource,
  SceneResource,
  SkinResource,
  SparseAccessorResource,
  TextureResource,
  TilesRendererResource,
  WorldResource,
} from "./schema";

export {
  ResourceModule,
  getLocalResource,
  getLocalResources,
  waitForLocalResource,
  registerResource,
  registerResourceLoader,
  getResourceDisposed,
  ResourceDisposalSystem,
};

export class MainNametag extends defineLocalResourceClass(NametagResource) {
  declare resourceType: ResourceType.Nametag;

  async load(ctx: IMainThreadContext) {
    const audioModule = getModule(ctx, AudioModule);
    const nametags = getLocalResources(ctx, MainNametag);
    audioModule.eventEmitter.emit("nametags-changed", [...nametags, this]);
  }

  dispose(ctx: IMainThreadContext): void {
    super.dispose(ctx);
    const audioModule = getModule(ctx, AudioModule);
    const nametags = getLocalResources(ctx, MainNametag);
    audioModule.eventEmitter.emit("nametags-changed", [...nametags]);
  }
}

export class MainSampler extends defineLocalResourceClass(SamplerResource) {}

export class MainBuffer extends defineLocalResourceClass(BufferResource) {}

export class MainBufferView extends defineLocalResourceClass(BufferViewResource) {
  declare buffer: MainBuffer;
}

const MAX_AUDIO_BYTES = 640_000;

const audioExtensionToMimeType: { [key: string]: string } = {
  mp3: "audio/mpeg",
  aac: "audio/mpeg",
  opus: "audio/ogg",
  ogg: "audio/ogg",
  wav: "audio/wav",
  flac: "audio/flac",
  mp4: "audio/mp4",
  webm: "audio/webm",
};

// TODO: Read fetch response headers
function getAudioMimeType(uri: string) {
  const extension = uri.split(".").pop() || "";
  return audioExtensionToMimeType[extension] || "audio/mpeg";
}

export class MainAudioData extends defineLocalResourceClass(AudioDataResource) {
  declare bufferView: MainBufferView | undefined;
  data: AudioBuffer | HTMLAudioElement | MediaStream | undefined;

  async load(ctx: IMainThreadContext) {
    const audio = getModule(ctx, AudioModule);

    let buffer: ArrayBuffer;
    let mimeType: string;

    if (this.bufferView) {
      buffer = toArrayBuffer(this.bufferView.buffer.data, this.bufferView.byteOffset, this.bufferView.byteLength);
      mimeType = this.mimeType;
    } else {
      const url = new URL(this.uri, window.location.href);

      if (url.protocol === "mediastream:") {
        this.data = audio.mediaStreams.get(url.pathname);
        return;
      }

      const response = await fetch(url.href);

      const contentType = response.headers.get("Content-Type");

      if (contentType) {
        mimeType = contentType;
      } else {
        mimeType = getAudioMimeType(this.uri);
      }

      buffer = await response.arrayBuffer();
    }

    if (buffer.byteLength > MAX_AUDIO_BYTES) {
      const objectUrl = URL.createObjectURL(new Blob([buffer], { type: mimeType }));

      const audioEl = new Audio();

      await new Promise((resolve, reject) => {
        audioEl.oncanplaythrough = resolve;
        audioEl.onerror = reject;
        audioEl.src = objectUrl;
      });

      this.data = audioEl;
    } else {
      this.data = await audio.context.decodeAudioData(buffer);
    }
  }
}

export class MainAudioSource extends defineLocalResourceClass(AudioSourceResource) {
  declare audio: MainAudioData | undefined;
  activeAudioDataResourceId: ResourceId = 0;
  sourceNode: MediaElementAudioSourceNode | AudioBufferSourceNode | MediaStreamAudioSourceNode | undefined;
  gainNode: GainNode | undefined;

  async load(ctx: IMainThreadContext) {
    const audioModule = getModule(ctx, AudioModule);
    const audioContext = audioModule.context;
    this.gainNode = audioContext.createGain();
  }

  dispose() {
    if (this.gainNode) {
      this.gainNode.disconnect();
    }

    if (this.sourceNode) {
      this.sourceNode.disconnect();
    }
  }
}

export class MainAudioEmitter extends defineLocalResourceClass(AudioEmitterResource) {
  declare sources: MainAudioSource[];
  activeSources: MainAudioSource[] = [];
  inputGain: GainNode | undefined;
  outputGain: GainNode | undefined;
  destination: AudioNode | undefined;

  async load(ctx: IMainThreadContext) {
    const audioModule = getModule(ctx, AudioModule);
    const audioContext = audioModule.context;

    this.inputGain = audioContext.createGain();
    // input gain connected by node update

    this.outputGain = audioContext.createGain();
    const destination =
      this.output === AudioEmitterOutput.Voice
        ? audioModule.voiceGain
        : this.output === AudioEmitterOutput.Music
        ? audioModule.musicGain
        : audioModule.environmentGain;
    this.outputGain.connect(destination);
    this.destination = destination;

    if (this.type === AudioEmitterType.Global) {
      this.inputGain.connect(this.outputGain);
    }
  }

  dispose() {
    if (this.inputGain) {
      this.inputGain.disconnect();
    }

    if (this.outputGain) {
      this.outputGain.disconnect();
    }
  }
}

export class MainImage extends defineLocalResourceClass(ImageResource) {
  declare bufferView: MainBufferView | undefined;
}

export class MainTexture extends defineLocalResourceClass(TextureResource) {
  declare sampler: MainSampler | undefined;
  declare source: MainImage;
}

export class MainReflectionProbe extends defineLocalResourceClass(ReflectionProbeResource) {
  declare reflectionProbeTexture: MainTexture | undefined;
}

export class MainMaterial extends defineLocalResourceClass(MaterialResource) {
  declare baseColorTexture: MainTexture | undefined;
  declare metallicRoughnessTexture: MainTexture | undefined;
  declare normalTexture: MainTexture | undefined;
  declare occlusionTexture: MainTexture | undefined;
  declare emissiveTexture: MainTexture | undefined;
  declare transmissionTexture: MainTexture | undefined;
  declare thicknessTexture: MainTexture | undefined;
}

export class MainLight extends defineLocalResourceClass(LightResource) {}

export class MainCamera extends defineLocalResourceClass(CameraResource) {}

export class MainSparseAccessor extends defineLocalResourceClass(SparseAccessorResource) {
  declare indicesBufferView: MainBufferView;
  declare indicesComponentType: AccessorComponentType;
  declare valuesBufferView: MainBufferView;
}

export class MainAccessor extends defineLocalResourceClass(AccessorResource) {
  declare bufferView: MainBufferView | undefined;
  declare componentType: AccessorComponentType;
  declare sparse: MainSparseAccessor | undefined;
}

export class MainMeshPrimitive extends defineLocalResourceClass(MeshPrimitiveResource) {
  declare attributes: MainAccessor[];
  declare indices: MainAccessor | undefined;
  declare material: MainMaterial | undefined;
}

export class MainInstancedMesh extends defineLocalResourceClass(InstancedMeshResource) {
  declare attributes: MainAccessor[];
}

export class MainMesh extends defineLocalResourceClass(MeshResource) {
  declare primitives: MainMeshPrimitive[];
}

export class MainLightMap extends defineLocalResourceClass(LightMapResource) {
  declare texture: MainTexture;
}

export class MainTilesRenderer extends defineLocalResourceClass(TilesRendererResource) {}

export class MainSkin extends defineLocalResourceClass(SkinResource) {
  declare joints: MainNode[];
  declare inverseBindMatrices: MainAccessor | undefined;
}

export class MainInteractable extends defineLocalResourceClass(InteractableResource) {}

export class MainNode extends defineLocalResourceClass(NodeResource) {
  declare resourceType: ResourceType.Node;
  declare parentScene: MainScene | undefined;
  declare parent: MainNode | undefined;
  declare firstChild: MainNode | undefined;
  declare prevSibling: MainNode | undefined;
  declare nextSibling: MainNode | undefined;
  declare mesh: MainMesh | undefined;
  declare instancedMesh: MainInstancedMesh | undefined;
  declare lightMap: MainLightMap | undefined;
  declare skin: MainSkin | undefined;
  declare light: MainLight | undefined;
  declare reflectionProbe: MainReflectionProbe | undefined;
  declare camera: MainCamera | undefined;
  declare audioEmitter: MainAudioEmitter | undefined;
  declare tilesRenderer: MainTilesRenderer | undefined;
  declare nametag: MainNametag | undefined;
  declare interactable: MainInteractable | undefined;
  currentAudioEmitterResourceId = 0;
  emitterInputNode?: GainNode;
  emitterPannerNode?: PannerNode;
  emitterOutput?: AudioEmitterOutput;

  dispose() {
    if (this.emitterPannerNode) {
      if (this.emitterInputNode) {
        try {
          this.emitterInputNode.disconnect(this.emitterPannerNode);
        } catch {}
      }

      this.emitterPannerNode.disconnect();
    }
  }
}

export class MainAnimationSampler extends defineLocalResourceClass(AnimationSamplerResource) {
  declare input: MainAccessor;
  declare output: MainAccessor;
}

export class MainAnimationChannel extends defineLocalResourceClass(AnimationChannelResource) {
  declare sampler: MainAnimationSampler;
  declare targetNode: MainNode;
}

export class MainAnimation extends defineLocalResourceClass(AnimationResource) {
  declare channels: MainAnimationChannel[];
  declare samplers: MainAnimationSampler[];
}

export class MainScene extends defineLocalResourceClass(SceneResource) {
  declare backgroundTexture: MainTexture | undefined;
  declare reflectionProbe: MainReflectionProbe | undefined;
  declare audioEmitters: MainAudioEmitter[];
  declare firstNode: MainNode | undefined;
}

export class MainEnvironment extends defineLocalResourceClass(EnvironmentResource) {
  declare publicScene: MainScene;
  declare privateScene: MainScene;
}

export class MainWorld extends defineLocalResourceClass(WorldResource) {
  declare environment: MainEnvironment | undefined;
  declare firstNode: MainNode | undefined;
  declare persistentScene: MainScene;
  declare activeCameraNode: MainNode | undefined;
}

const {
  ResourceModule,
  getLocalResource,
  getLocalResources,
  waitForLocalResource,
  registerResource,
  registerResourceLoader,
  getResourceDisposed,
  ResourceDisposalSystem,
} = createLocalResourceModule<IMainThreadContext>([
  MainNode,
  MainAudioData,
  MainAudioSource,
  MainAudioEmitter,
  MainNametag,
  MainLight,
  MainSampler,
  MainCamera,
  MainBuffer,
  MainBufferView,
  MainImage,
  MainMaterial,
  MainTexture,
  MainMesh,
  MainScene,
  MainMeshPrimitive,
  MainInteractable,
  MainAccessor,
  MainSparseAccessor,
  MainSkin,
  MainInstancedMesh,
  MainLightMap,
  MainReflectionProbe,
  MainTilesRenderer,
  MainAnimationChannel,
  MainAnimationSampler,
  MainAnimation,
  MainEnvironment,
  MainWorld,
]);
