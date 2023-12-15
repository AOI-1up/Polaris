import { CanvasElement } from "@/components/atom/CanvasElement";
import { useAtom, useAtomValue } from "jotai";
import { useEffect, useState } from "react";
import { EC2_Resources } from "@/types/resources";
import { CurrentDisplayCode } from "@/components/atom/CurrentDisplayCode";
import { GenerateEC2_tf } from "@/utils/convertToTerraform/GenerateEC2_tf";
import AceEditor from "react-ace";

export const DisplayCode = () => {
  const [terraform, setTerraform] = useState("");
  const [showCode, setShowCode] = useAtom(CurrentDisplayCode);
  const canvasElementArray = useAtomValue(CanvasElement);

  useEffect(() => {
    switch (showCode) {
      case "main":
        setTerraform("");
        break;
      case "EC2":
        const resourcesArray = canvasElementArray
          .filter((element) => element.service === showCode)
          .map((element) => element.resources);
        const code = GenerateEC2_tf(resourcesArray as EC2_Resources[]);
        setTerraform(code);
        break;
      default:
        break;
    }
  }, [canvasElementArray, showCode]);

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex h-[40px] items-center border-b-[1px] border-gray-400 px-4 py-2 font-sans text-sm font-bold">
        Terraform Code Display
      </div>
      <div className="flex justify-between border-b-[1px] border-gray-400 px-10 py-1 font-sans text-sm font-bold">
        <button
          className={`w-[50px] rounded p-1 hover:bg-gray-300 active:opacity-50 ${
            showCode === "main" ? "" : "text-gray-400"
          }`}
          onClick={() => setShowCode("main")}
        >
          main
        </button>
        <button
          className={`w-[50px] rounded p-1 hover:bg-gray-300 active:opacity-50 ${
            showCode === "EC2" ? "" : "text-gray-400"
          }`}
          onClick={() => setShowCode("EC2")}
        >
          EC2
        </button>
        <button
          className={`w-[50px] rounded p-1 hover:bg-gray-300 active:opacity-50 ${
            showCode === "VPC" ? "" : "text-gray-400"
          }`}
          onClick={() => setShowCode("VPC")}
        >
          VPC
        </button>
      </div>
      <div className="flex-grow">
        <AceEditor
          name="Terraform_Code"
          width="100%"
          height="100%"
          editorProps={{ $blockScrolling: true }}
          value={terraform}
          setOptions={{
            showLineNumbers: true,
          }}
          readOnly
        />
      </div>
    </div>
  );
};
