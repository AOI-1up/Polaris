import { CanvasStateObject } from "@/types/canvas";

export const GetCanvasPosition = (
  state: CanvasStateObject,
  clientX: number,
  clientY: number,
) => {
  if (!state.canvas || !state.canvasContainer || !state.context) return;

  const canvasPosition = {
    x: clientX - state.canvas.offsetLeft + state.canvasContainer.scrollLeft,
    y: clientY - state.canvas.offsetTop + state.canvasContainer.scrollTop,
    client: {
      x: clientX,
      y: clientY,
    },
    offset: {
      left: state.canvas.offsetLeft,
      right: state.canvas.offsetLeft + state.canvasContainer.clientWidth,
      top: state.canvas.offsetTop,
      bottom: state.canvas.offsetTop + state.canvasContainer.clientHeight,
    },
  };

  return canvasPosition;
};
