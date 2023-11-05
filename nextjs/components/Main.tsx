import { useEffect, useRef } from "react";
import { useSetAtom, useAtomValue } from "jotai";
import {
  CanvasAtom,
  CanvasContainerAtom,
  ContextAtom,
} from "./atom/CanvasState";
import { CanvasElement } from "./atom/CanvasElement";

export const Main = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const canvasElementArray = useAtomValue(CanvasElement);

  const setCanvas = useSetAtom(CanvasAtom);
  const setCanvasContainer = useSetAtom(CanvasContainerAtom);
  const setContext = useSetAtom(ContextAtom);

  useEffect(() => {
    const canvas = canvasRef.current;
    const canvasContainer = canvasContainerRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !canvasContainer || !context) return;

    setCanvas(canvas);
    setCanvasContainer(canvasContainer);
    setContext(context);

    canvas.width = 5000;
    canvas.height = 5000;
    canvasContainer.scrollLeft =
      (canvas.width - canvasContainer.offsetWidth) / 2;
    canvasContainer.scrollTop =
      (canvas.height - canvasContainer.offsetHeight) / 2;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    canvasElementArray.forEach((element) => {
      const icon = new Image();
      icon.src = element.src;
      icon.onload = () => {
        context.drawImage(icon, element.x, element.y);
      };
    });
  }, [canvasElementArray]);

  return (
    <div
      className="overflow-scroll"
      style={{ width: "calc(100vw - 460px)", height: "calc(100vh - 50px)" }}
      ref={canvasContainerRef}
    >
      <canvas ref={canvasRef} />
    </div>
  );
};
