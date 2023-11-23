"use client";
import { useAtomValue } from "jotai";
import { CanvasElement } from "./atom/CanvasElement";
import { CurrentCanvasElement } from "./atom/CurrentCanvasElement";
import { FormEC2 } from "./ui/configure/FormEC2";
import { EC2_Resources } from "@/types/resources";

export const Aside = () => {
  const canvasElementArray = useAtomValue(CanvasElement);
  const focusId = useAtomValue(CurrentCanvasElement);

  const focusedElement = canvasElementArray.find(
    (element) => element.id === focusId
  );

  return (
    <div
      className="w-full h-full overflow-y-scroll select-none bg-gray-50 border-l-2 border-gray-300 hide-scrollbar"
    >
      {focusedElement?.service == "EC2" && (
        <FormEC2 resources={focusedElement.resources as EC2_Resources} />
      )}
    </div>
  );
};
