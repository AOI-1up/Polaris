import { v4 as uuid } from "uuid";
import { CanvasElementObject } from "@/types/canvas";

export const AddCanvasElement = (
  setCanvasElement: (newCanvasElement: CanvasElementObject) => void,
  serviceIcon: {
    name: string;
    src: string;
  },
  position: {
    x: number;
    y: number;
  }
) => {
  const newCanvasElement = {
    id: uuid(),
    service: serviceIcon.name,
    src: serviceIcon.src,
    x: position.x,
    y: position.y,
    width: 80,
    height: 80,
    resources: {},
  };
  setCanvasElement(newCanvasElement);
  return;
};
