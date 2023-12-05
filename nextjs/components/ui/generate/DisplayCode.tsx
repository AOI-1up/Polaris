import { CanvasElement } from "@/components/atom/CanvasElement";
import { useAtom, useAtomValue } from "jotai";
import { useEffect, useState } from "react";
import { EC2_Resources } from "@/types/resources";
import { CurrentDisplayCode } from "@/components/atom/CurrentDisplayCode";
import { GenerateEC2_tf } from "@/utils/convertToTerraform/GenerateEC2_tf";

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
    <div className="h-full w-full">
      Terraform Code Block
      <div className="mx-5 flex justify-between">
        <button onClick={() => setShowCode("main")}>main</button>
        <button onClick={() => setShowCode("EC2")}>EC2</button>
        <button onClick={() => setShowCode("VPC")}>VPC</button>
      </div>
      <textarea className="h-full w-full" value={terraform} readOnly />
    </div>
  );
};
