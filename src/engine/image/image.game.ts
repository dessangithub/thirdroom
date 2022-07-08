import { GameState } from "../GameTypes";
import { ImageResourceProps, ImageResourceType } from "./image.common";
import { addResourceRef, createResource, disposeResource } from "../resource/resource.game";
import { RemoteBufferView } from "../bufferView/bufferView.game";
import { Thread } from "../module/module.common";
import { ResourceId } from "../resource/resource.common";

export interface RemoteImage {
  name: string;
  resourceId: ResourceId;
  uri?: string;
  bufferView?: RemoteBufferView<Thread.Render>;
  mimeType?: string;
}

export interface BufferViewRemoteImageProps {
  name?: string;
  bufferView: RemoteBufferView<Thread.Render>;
  mimeType: string;
}

export interface RemoteImageProps {
  name?: string;
  uri: string;
}

const DEFAULT_IMAGE_NAME = "Image";

export function createRemoteImageFromBufferView(ctx: GameState, props: BufferViewRemoteImageProps): RemoteImage {
  const name = props.name || DEFAULT_IMAGE_NAME;
  const bufferViewResourceId = props.bufferView.resourceId;

  addResourceRef(ctx, bufferViewResourceId);

  return {
    name,
    resourceId: createResource<ImageResourceProps>(
      ctx,
      Thread.Render,
      ImageResourceType,
      {
        bufferView: bufferViewResourceId,
        mimeType: props.mimeType,
      },
      {
        name,
        dispose() {
          disposeResource(ctx, bufferViewResourceId);
        },
      }
    ),
    bufferView: props.bufferView,
    mimeType: props.mimeType,
  };
}

export function createRemoteImage(ctx: GameState, props: RemoteImageProps): RemoteImage {
  const name = props.name || DEFAULT_IMAGE_NAME;

  return {
    name,
    resourceId: createResource<ImageResourceProps>(
      ctx,
      Thread.Render,
      ImageResourceType,
      { uri: props.uri },
      {
        name,
      }
    ),
  };
}
