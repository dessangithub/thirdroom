import { SimpleTile, GapView } from "hydrogen-view-sdk";

import type { TileViewConstructor } from "hydrogen-view-sdk";
import { TextMessageView } from "./TextMessageView";
import { AnnouncementView } from "./AnnouncementView";

export function viewClassForTile(vm: typeof SimpleTile): typeof TileViewConstructor {
  switch (vm.shape) {
    case "gap":
      return GapView;
    case "announcement":
      return AnnouncementView;
    case "message":
    case "message-status":
      return TextMessageView;
    default:
      console.log(vm);
      throw new Error(
        `Tiles of shape "${vm.shape}" are not supported, check the tileClassForEntry function in the view model`
      );
  }
}
