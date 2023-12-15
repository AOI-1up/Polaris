"use client";
import { useEffect, useRef } from "react";
// import { throttle } from "lodash";
import { useSetAtom, useAtomValue } from "jotai";
import { UseCanvasState } from "@/hooks/UseCanvasState";
import { UpdateCanvasElement } from "@/utils/updateCanvasElement";
import {
  CanvasAtom,
  CanvasContainerAtom,
  ContextAtom,
} from "./atom/CanvasState";
import { CanvasElement } from "./atom/CanvasElement";
import { CurrentCanvasElement } from "./atom/CurrentCanvasElement";

export const Main = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const canvasElementArray = useAtomValue(CanvasElement);

  const setCanvas = useSetAtom(CanvasAtom);
  const setCanvasContainer = useSetAtom(CanvasContainerAtom);
  const setContext = useSetAtom(ContextAtom);

  const canvasState = UseCanvasState();

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

    const gridSpacing = 30;
    context.strokeStyle = "#ddd";
    context.setLineDash([2, 4]);

    for (let x = 0; x <= canvas.width; x += gridSpacing) {
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x, canvas.height);
      context.stroke();
    }
    for (let y = 0; y <= canvas.height; y += gridSpacing) {
      context.beginPath();
      context.moveTo(0, y);
      context.lineTo(canvas.width, y);
      context.stroke();
    }
    context.setLineDash([]);
  }, [setCanvas, setCanvasContainer, setContext]);

  /* Jotai から要素を Canvas に追加する */
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    canvasElementArray.forEach((element) => {
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
      }

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
      };
    });
    console.log(canvasElementArray);
  }, [canvasElementArray]);

  /* 設定を開く要素の ID を Jotai に追加する */
  const setCurrentCanvasElementId = useSetAtom(CurrentCanvasElement);
  const setCurrentCanvasElement = (focusId: string) => {
    setCurrentCanvasElementId(focusId);
  };

  // const mousemove = throttle(() => console.log("MouseMove..."), 200);

  return (
    <div
      className="overflow-scroll"
      style={{ width: "calc(100vw - 560px)", height: "calc(100vh - 50px)" }}
      ref={canvasContainerRef}
      //onMouseMove={mousemove}
      onMouseDown={(event) =>
        UpdateCanvasElement(
          event,
          canvasState,
          canvasElementArray,
          setCurrentCanvasElement,
        )
      }
    >
      <canvas ref={canvasRef} />
    </div>
  );
};
