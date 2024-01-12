import { CanvasElementObject } from "@/types/canvas";
import { ValidateMousePosition } from "./ValidateMousePosition";

const resetCanvas = (context: CanvasRenderingContext2D) => {
  context.clearRect(0, 0, 5000, 5000);
  context.beginPath();
};

export const HandleCanvasElement = (
  event: React.MouseEvent<HTMLDivElement>,
  canvasContainer: HTMLDivElement | null,
  context: CanvasRenderingContext2D | null | undefined,
  canvasElementArray: CanvasElementObject[],
  setCurrentCanvasElement: (focusId: string) => void,
) => {
  if (!canvasContainer || !context) return;
  const position = {
    x: event.clientX - canvasContainer.offsetLeft + canvasContainer.scrollLeft,
    y: event.clientY - canvasContainer.offsetTop + canvasContainer.scrollTop,
  };

  const focus = ValidateMousePosition(position, canvasElementArray);
  setCurrentCanvasElement(focus?.id || "");
  if (!focus) return;

  const initPosition = { x: event.clientX, y: event.clientY };

  const handleMouseMove = (event: MouseEvent) => {
    const test = focus;
    test.x = focus.x + event.clientX - initPosition.x;
    test.y = focus.y + event.clientY - initPosition.y;

    console.log(test.x, test.y);
    resetCanvas(context);
    const icon = new Image();
    icon.src = focus.src;
    icon.onload = () => {
      context.drawImage(icon, test.x, test.y, focus.width, focus.height);
    };
  };
  const handleMouseUp = (event: MouseEvent) => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);

    console.log(event);
  };

  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("mouseup", handleMouseUp);

  return;
};
