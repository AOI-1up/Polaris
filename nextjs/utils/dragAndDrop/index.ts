import { Dispatch, SetStateAction } from "react";
import { CanvasElementObject, CanvasStateObject } from "@/types/canvas";
import { GetCanvasPosition } from "../GetCanvasPosition";
import { AddCanvasElement } from "./AddCanvasElement";
import { ValidateCanvasPosition } from "./ValidateCanvasPosition";
import { ServiceIcon } from "@/types/service";

export const DragAndDrop = (
  setShowDragged: Dispatch<SetStateAction<boolean>>,
  setPosition: (newValue: { x: number; y: number }) => void,
  setCanvasElement: (newCanvasElement: CanvasElementObject) => void,
  serviceIcon: ServiceIcon,
  state: CanvasStateObject,
) => {
  /* アイコンをマウスカーソルに追従させる */
  const handleMouseMove = (event: MouseEvent) => {
    setShowDragged(true);
    setPosition({ x: event.clientX, y: event.clientY });
  };

  /* 座標を取得し Jotai に追加する */
  const handleMouseUp = (event: MouseEvent) => {
    setShowDragged(false);

    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);

    const position = GetCanvasPosition(state, event.clientX, event.clientY);
    if (!position || !ValidateCanvasPosition(position)) return;

    AddCanvasElement(setCanvasElement, serviceIcon, position);
  };

  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("mouseup", handleMouseUp);

  return;
};
