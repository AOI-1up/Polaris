"use client";
import { useAtomValue } from "jotai";
import { CanvasElement } from "./atom/CanvasElement";
import { CurrentCanvasElement } from "./atom/CurrentCanvasElement";
import { EC2_Resources } from "@/types/resources";
import { InputForm } from "./ui/configure/InputForm";
import { DisplayCode } from "./ui/generate/DisplayCode";

export const Aside = () => {
  const canvasElementArray = useAtomValue(CanvasElement);
  const focusId = useAtomValue(CurrentCanvasElement);

  const focusedIndex = canvasElementArray.findIndex(
    (element) => element.id === focusId,
  );
  const focusedElement = canvasElementArray[focusedIndex];

  return (
    <div className="hide-scrollbar h-full w-full select-none overflow-y-scroll border-l-2 border-gray-300 bg-gray-100">
      {!focusedElement && <DisplayCode />}
      {focusedElement?.service == "EC2" && (
        <InputForm
          resources={focusedElement.resources as EC2_Resources}
          index={focusedIndex}
        />
      )}
    </div>
  );
};
