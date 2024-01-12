import { CanvasElementObject } from "@/types/canvas";
import { ValidateMousePosition } from "./ValidateMousePosition";

const resetCanvas = (context: CanvasRenderingContext2D) => {
  context.clearRect(0, 0, 5000, 5000);
  context.beginPath();
};

export const UpdateCanvasElement = (
  event: React.MouseEvent<HTMLDivElement>,
  canvasContainer: HTMLDivElement | null,
  context: CanvasRenderingContext2D | null | undefined,
  canvasElementArray: CanvasElementObject[],
) => {
  if (!canvasContainer || !context) return;

  const position = {
    x: event.clientX - canvasContainer.offsetLeft + canvasContainer.scrollLeft,
    y: event.clientY - canvasContainer.offsetTop + canvasContainer.scrollTop,
  };

  const focus = ValidateMousePosition(position, canvasElementArray);
  resetCanvas(context);
  if (!focus) return;

  context.rect(
    focus.x - 1,
    focus.y - 1,
    focus.width + 2,
    focus.height + 2,
  );
  context.strokeStyle = "#9370DB";
  context.stroke();

  return;
};
