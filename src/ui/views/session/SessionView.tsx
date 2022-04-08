import { useEffect, useRef } from "react";

import "./SessionView.css";
import { SessionViewModel } from "../../../viewModels/session/SessionViewModel";
import { RoomViewModel } from "../../../viewModels/session/room/RoomViewModel";
import { LeftPanelView } from "./leftpanel/LeftPanelView";
import { StatusBar } from "./statusbar/StatusBar";
import { RoomPreview } from "./room/RoomPreview";
import { RoomView } from "./room/RoomView";
import { useVMProp } from "../../hooks/useVMProp";
import { useEngine } from "../../hooks/useEngine";
import { Stats } from "./stats/Stats";

interface ISessionView {
  vm: SessionViewModel;
}

export function SessionView({ vm }: ISessionView) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { getStats } = useEngine(canvasRef);

  return (
    <>
      <Stats getStats={getStats} />
      <canvas className="SessionView__viewport" ref={canvasRef} />
      <div className="SessionView flex flex-column">
        <StatusBar vm={vm.statusBarViewModel} />
        <div className="SessionView__content flex grow">
          <LeftPanelView vm={vm.leftPanelViewModel} />
          <MiddleView vm={vm} />
        </div>
      </div>
    </>
  );
}

function MiddleView({ vm }: { vm: SessionViewModel }) {
  const activeRoomId = useVMProp(vm, "activeRoomId");

  if (!activeRoomId) return <p>select room from left panel</p>;
  if (vm.isActiveRoomInvite) return <p>invite</p>;
  return <RoomViewWrapper vm={vm.roomViewModel!} roomId={activeRoomId} />;
}

function RoomViewWrapper({ vm, roomId }: { vm: RoomViewModel; roomId: string }) {
  useVMProp(vm, "roomFlow");

  const prevRoomFlowRef = useRef<string>();

  useEffect(() => {
    prevRoomFlowRef.current = vm.roomFlow;
  }, [vm.roomFlow]);

  return (
    <>
      {["preview", "load"].includes(vm.roomFlow) && <RoomPreview vm={vm} roomId={roomId} />}
      {vm.roomFlow === "loaded" && <RoomView vm={vm} roomId={roomId} />}
    </>
  );
}
