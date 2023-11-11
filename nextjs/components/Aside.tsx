"use client";
//import { useEffect } from "react";
import { useAtomValue } from "jotai";
import { CurrentCanvasElement } from "./atom/CurrentCanvasElement";

export const Aside = () => {
  const test = useAtomValue(CurrentCanvasElement);

  return (
    <div className="w-full h-full select-none bg-gray-50 border-l-2 border-gray-300">
      {test}
    </div>
  );
};
