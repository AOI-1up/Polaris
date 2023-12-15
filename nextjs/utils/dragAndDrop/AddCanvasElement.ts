import { v4 as uuid } from "uuid";
import { CanvasElementObject } from "@/types/canvas";
import { Position } from "@/types/position";
import { ServiceIcon } from "@/types/service";

export const AddCanvasElement = (
  setCanvasElement: (newCanvasElement: CanvasElementObject) => void,
  service: ServiceIcon,
  position: Position,
) => {
  // width height resources も props で受け取る
  const newCanvasElement = {
    id: uuid(),
    service: service.name,
    src: service.src,
    x: position.x,
    y: position.y,
    width: service.width,
    height: service.height,
    resources: service.resources,
    groups: service.groups,
  };
  setCanvasElement(newCanvasElement);
  return;
};
