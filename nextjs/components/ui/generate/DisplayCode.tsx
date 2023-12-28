import { CanvasElement } from "@/components/atom/CanvasElement";
import { useAtom, useAtomValue } from "jotai";
import { useEffect, useState } from "react";
import { EC2_Resources, VPC_Resources } from "@/types/resources";
import { CurrentDisplayCode } from "@/components/atom/CurrentDisplayCode";
import { GenerateEC2_tf } from "@/utils/convertToTerraform/GenerateEC2_tf";
import { GenerateVPC_tf } from "@/utils/convertToTerraform/GenerateVPC_tf";
import AceEditor from "react-ace";

export const DisplayCode = () => {
  const [terraform, setTerraform] = useState("");
  const [showCode, setShowCode] = useAtom(CurrentDisplayCode);
  const canvasElementArray = useAtomValue(CanvasElement);

  useEffect(() => {
    const resourcesArray = canvasElementArray
      .filter((element) => element.service === showCode)
      .map((element) => element.resources);

    switch (showCode) {
      case "main":
        setTerraform("");
        break;
      case "EC2":
        setTerraform(GenerateEC2_tf(resourcesArray as EC2_Resources[]));
        break;
      case "VPC" || "Public_Subnet":
        console.log(resourcesArray, showCode);
        setTerraform(GenerateVPC_tf(resourcesArray as VPC_Resources[]));
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
        {["main", "EC2", "VPC"].map((code) => (
          <button
            key={code}
            className={`w-[50px] rounded p-1 hover:bg-gray-300 active:opacity-50 ${
              showCode === code ? "" : "text-gray-400"
            }`}
            onClick={() => setShowCode(code)}
          >
            {code}
          </button>
        ))}
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
