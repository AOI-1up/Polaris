"use client";
import { useAtomValue } from "jotai";
import { CanvasElement } from "./atom/CanvasElement";
import { CurrentCanvasElement } from "./atom/CurrentCanvasElement";
import { CombinedResources } from "@/types/resources";
import { InputForm } from "./ui/configure/InputForm";
import { DisplayCode } from "./ui/generate/DisplayCode";

export const Aside = () => {
  const canvasElementArray = useAtomValue(CanvasElement);
  const id = useAtomValue(CurrentCanvasElement);

  const focusedIndex = canvasElementArray.findIndex(
    (element) => element.id === id.select,
  );
  const focusedElement = canvasElementArray[focusedIndex];

  return (
    <div className="hide-scrollbar h-full w-full select-none overflow-y-scroll border-x-2 border-b-2 border-gray-400 bg-gray-100">
      {!focusedElement && <DisplayCode />}
      {focusedElement && (
        <InputForm
          resources={focusedElement.resources as CombinedResources}
          index={focusedIndex}
        />
      )}
    </div>
  );
};
