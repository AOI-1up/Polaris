import { CanvasElementObject, CanvasStateObject } from "@/types/canvas";
import { ValidateMousePosition } from "./ValidateMousePosition";
import { GetCanvasPosition } from "../GetCanvasPosition";

export const HandleCanvasElement = (
  event: React.MouseEvent<HTMLDivElement>,
  state: CanvasStateObject,
  context: CanvasRenderingContext2D | null | undefined,
  canvasElementArray: CanvasElementObject[],
  setCurrentCanvasElement: (focusId: string) => void,
  setCanvasElementArray: (element: CanvasElementObject[]) => void,
) => {
  if (!state.canvasContainer || !context) return;
  const mousePosition = {
    x:
      event.clientX -
      state.canvasContainer.offsetLeft +
      state.canvasContainer.scrollLeft,
    y:
      event.clientY -
      state.canvasContainer.offsetTop +
      state.canvasContainer.scrollTop,
  };

  const focus = ValidateMousePosition(mousePosition, canvasElementArray);
  if (!focus) {
    setCurrentCanvasElement("");
    return;
  }
  setCurrentCanvasElement(focus[0].id);

  const handleMouseUp = (event: MouseEvent) => {
    if (!state.canvasContainer) return;
    const finalMousePosition = {
      x:
        event.clientX -
        state.canvasContainer.offsetLeft +
        state.canvasContainer.scrollLeft,
      y:
        event.clientY -
        state.canvasContainer.offsetTop +
        state.canvasContainer.scrollTop,
    };

    const distanceMoved = Math.sqrt(
      Math.pow(finalMousePosition.x - mousePosition.x, 2) +
        Math.pow(finalMousePosition.y - mousePosition.y, 2),
    );

    if (distanceMoved <= 5) {
      window.removeEventListener("mouseup", handleMouseUp);
      return;
    }

    window.removeEventListener("mouseup", handleMouseUp);
    const position = GetCanvasPosition(state, event.clientX, event.clientY);

    const canvasElement = canvasElementArray.find(
      (element) => element.id === focus[0].id,
    );
    if (canvasElement && position) {
      state.context?.clearRect(0, 0, 5000, 5000);

      canvasElement.x = position.x;
      canvasElement.y = position.y;
      canvasElement.render = true;

      const updatedArray = canvasElementArray.map((item) => {
        if (item.id === canvasElement.id) {
          return canvasElement;
        } else {
          return { ...item, render: true };
        }
      });

      setCanvasElementArray(updatedArray);
    }
  };

  window.addEventListener("mouseup", handleMouseUp);

  window.addEventListener("mouseup", handleMouseUp);

  return;
};
