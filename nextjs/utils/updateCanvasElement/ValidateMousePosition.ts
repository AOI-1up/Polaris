import { CanvasElementObject } from "@/types/canvas";

export const ValidateMousePosition = (
  position: { x: number; y: number },
  canvasElementArray: CanvasElementObject[],
) => {
  const { x, y } = position;

  const foundCanvasElement = canvasElementArray
    .slice()
    .reverse()
    .find((canvasElement) => {
      const isWithinX =
        x >= canvasElement.x && x <= canvasElement.x + canvasElement.width;
      const isWithinY =
        y >= canvasElement.y && y <= canvasElement.y + canvasElement.height;
      return isWithinX && isWithinY;
    });

  return foundCanvasElement ? foundCanvasElement.id : undefined;
};
