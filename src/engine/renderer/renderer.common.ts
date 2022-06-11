import { defineObjectBufferSchema, ObjectTripleBuffer } from "../allocator/ObjectBufferView";

export const rendererModuleName = "renderer";

export enum RendererMessageType {
  InitializeCanvas = "renderer-initialize-canvas",
  InitializeResourceManager = "initialize-resource-manager",
  InitializeRendererTripleBuffers = "initialize-renderer-triple-buffers",
}

export interface InitializeCanvasMessage {
  canvasTarget?: OffscreenCanvas;
  initialCanvasWidth: number;
  initialCanvasHeight: number;
}

export const rendererStateSchema = defineObjectBufferSchema({
  activeSceneResourceId: [Uint32Array, 1],
  activeCameraResourceId: [Uint32Array, 1],
});

export type RendererStateTripleBuffer = ObjectTripleBuffer<typeof rendererStateSchema>;

export interface InitializeRendererTripleBuffersMessage {
  rendererStateTripleBuffer: RendererStateTripleBuffer;
}
