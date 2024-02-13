import { CanvasStateObject } from "@/types/canvas";

export const GetCanvasPosition = (
  state: CanvasStateObject,
  clientX: number,
  clientY: number,
) => {
  const { canvas, canvasContainer, context } = state;
  if (!canvas || !canvasContainer || !context) return;

  const canvasPosition = {
    x: clientX - canvasContainer.offsetLeft + canvasContainer.scrollLeft,
    y: clientY - canvasContainer.offsetTop + canvasContainer.scrollTop,
    client: {
      x: clientX,
      y: clientY,
    },
    offset: {
      left: canvasContainer.offsetLeft,
      right: canvasContainer.offsetLeft + canvasContainer.clientWidth,
      top: canvasContainer.offsetTop,
      bottom: canvasContainer.offsetTop + canvasContainer.clientHeight,
    },
  };

  return canvasPosition;
};
