import { CanvasElementObject } from "@/types/canvas";
import { MutableRefObject } from "react";

export const InitCanvas = (
  canvas: HTMLCanvasElement,
  canvasContainer: HTMLDivElement,
  canvasElementArray: MutableRefObject<CanvasElementObject[]>,
) => {
  canvas.width = 5000;
  canvas.height = 5000;

  canvasContainer.scrollLeft = (canvas.width - canvasContainer.offsetWidth) / 2;
  canvasContainer.scrollTop =
    (canvas.height - canvasContainer.offsetHeight) / 2;

  canvasElementArray.current.forEach((element) => {
    element.render = true;
  });

  return;
};
