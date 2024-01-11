"use client";
import { useEffect, useRef } from "react";
import { throttle } from "lodash";
import { useSetAtom, useAtomValue } from "jotai";
import { UpdateCanvasElement } from "@/utils/updateCanvasElement";
import {
  CanvasAtom,
  CanvasContainerAtom,
  ContextAtom,
} from "./atom/CanvasState";
import { CanvasElement } from "./atom/CanvasElement";
import { CurrentCanvasElement } from "./atom/CurrentCanvasElement";
import { InitCanvas } from "@/utils/canvasSettings/InitCanvas";
import { InitCanvasBg } from "@/utils/canvasSettings/InitCanvasBg";
import { AddCanvasFromJotai } from "@/utils/canvasSettings/AddCanvasFromJotai";
import { InitCanvasSelect } from "@/utils/canvasSettings/InitCanvasSelect";

export const Main = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasBgRef = useRef<HTMLCanvasElement>(null);
  const canvasSelectRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const setCanvas = useSetAtom(CanvasAtom);
  const setCanvasContainer = useSetAtom(CanvasContainerAtom);
  const setContext = useSetAtom(ContextAtom);

  const canvasElementArray = useAtomValue(CanvasElement);
  const initCanvasElementArray = useRef(canvasElementArray);

  useEffect(() => {
    const canvas = canvasRef.current;
    const canvasBg = canvasBgRef.current;
    const canvasSelect = canvasSelectRef.current;
    const canvasContainer = canvasContainerRef.current;
    const context = canvas?.getContext("2d");
    const contextBg = canvasBg?.getContext("2d");
    if (
      !canvas ||
      !canvasBg ||
      !canvasSelect ||
      !canvasContainer ||
      !context ||
      !contextBg
    )
      return;

    setCanvas(canvas);
    setCanvasContainer(canvasContainer);
    setContext(context);

    InitCanvas(canvas, canvasContainer, initCanvasElementArray);
    InitCanvasBg(canvasBg, contextBg);
    InitCanvasSelect(canvasSelect);
  }, [setCanvas, setCanvasContainer, setContext]);

  /* Jotai から要素を Canvas に追加する */
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    AddCanvasFromJotai(canvasElementArray, context);
  }, [canvasElementArray]);

  const setCurrentCanvasElementId = useSetAtom(CurrentCanvasElement);
  const setCurrentCanvasElement = (focusId: string) => {
    setCurrentCanvasElementId({ select: "a", focus: focusId });
  };

  return (
    <div
      className="relative overflow-scroll"
      style={{
        width: "calc(100vw - 560px)",
        height: "calc(100vh - 50px)",
      }}
      ref={canvasContainerRef}
      onMouseMove={throttle(
        (event) =>
          UpdateCanvasElement(
            event,
            canvasContainerRef.current,
            canvasSelectRef.current?.getContext("2d"),
            canvasElementArray,
            setCurrentCanvasElement,
          ),
        50,
      )}
    >
      <canvas ref={canvasBgRef} className="absolute" />
      <canvas ref={canvasRef} className="absolute" />
      <canvas ref={canvasSelectRef} className="absolute" />
    </div>
  );
};
