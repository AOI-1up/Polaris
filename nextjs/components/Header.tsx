"use client";
import { useAtomValue } from "jotai";
import { BsCaretRight } from "react-icons/bs";
import { CanvasElement } from "./atom/CanvasElement";
import { convertToTerraform } from "@/utils/convertToTerraform";
import { saveAs } from "file-saver";

export const Header = () => {
  const canvasElementArray = useAtomValue(CanvasElement);

  const handleClick = () => {
    const code = convertToTerraform(canvasElementArray);
    const blob = new Blob([code], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "main.tf");
  };

  return (
    <div className="flex h-[50px] w-screen select-none items-center justify-between border-b-2 border-gray-400 bg-gray-800">
      <div className="w-[70px]"></div>
      <div className="font-mono text-xl font-bold tracking-widest text-white">
        Polaris
      </div>
      <button
        className="flex h-full w-[70px] items-center justify-center text-white"
        onClick={handleClick}
      >
        <BsCaretRight size="25px" />
      </button>
    </div>
  );
};
