import { CanvasElementObject, CanvasStateObject } from "@/types/canvas";
import { GetCanvasPosition } from "../GetCanvasPosition";
import { ValidateMousePosition } from "./ValidateMousePosition";

export const UpdateCanvasElement = (
  event: React.MouseEvent<HTMLDivElement>,
  state: CanvasStateObject,
  canvasElementArray: CanvasElementObject[],
  setCurrentCanvasElement: (focusId: string) => void
) => {
  const position = GetCanvasPosition(state, event.clientX, event.clientY);
  if (!position) return;

  const { client, offset } = position;
  if (client.x > offset.right || client.y > offset.bottom) return;

  const focusId = ValidateMousePosition(position, canvasElementArray);
  setCurrentCanvasElement(focusId || "");

  return;
};
