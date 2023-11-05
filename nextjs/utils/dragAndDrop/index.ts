import { Dispatch, SetStateAction } from "react";
import { CanvasElementObject, CanvasStateObject } from "@/types/canvas";
import { GetCanvasPosition } from "./GetCanvasPosition";
import { AddCanvasElement } from "./AddCanvasElement";

export const DragAndDrop = (
  setShowDragged: Dispatch<SetStateAction<boolean>>,
  setPosition: (newValue: { x: number; y: number }) => void,
  setCanvasElement: (newCanvasElement: CanvasElementObject) => void,
  serviceIcon: {
    name: string;
    src: string;
  },
  state: CanvasStateObject
) => {
  const handleMouseMove = (event: MouseEvent) => {
    setShowDragged(true);
    setPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseUp = (event: MouseEvent) => {
    setShowDragged(false);

    const position = GetCanvasPosition(state, event.clientX, event.clientY);
    position && AddCanvasElement(setCanvasElement, serviceIcon, position);

    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("mouseup", handleMouseUp);

  return;
};
