import { CanvasElementObject } from "@/types/canvas";

export const AddCanvasFromJotai = (
  canvasElementArray: CanvasElementObject[],
  context: CanvasRenderingContext2D,
) => {
  canvasElementArray.forEach((element) => {
    if (!element.render) return;
    const icon = new Image();
    icon.src = element.src;
    icon.onload = () => {
      context.drawImage(
        icon,
        element.x,
        element.y,
        element.width,
        element.height,
      );
      if (Object.keys(element.groups).length > 0) {
        context.beginPath();
        context.rect(
          element.x,
          element.y,
          element.groups.width as number,
          element.groups.height as number,
        );
        context.lineWidth = 2;
        context.strokeStyle = element.groups.color as string;
        context.stroke();

        context.font = "18px Arial";
        context.fillText(element.service, element.x + 50, element.y + 25);
      }
    };
    element.render = false;
  });
  console.log(canvasElementArray);
  return;
};
