import { CanvasElement } from "@/components/atom/CanvasElement";
import { useAtomValue } from "jotai";
import { useEffect, useState } from "react";
import AceEditor from "react-ace";
import { convertToTerraform } from "@/utils/convertToTerraform";

export const DisplayCode = () => {
  const [terraform, setTerraform] = useState("");
  const canvasElementArray = useAtomValue(CanvasElement);

  useEffect(() => {
    setTerraform(convertToTerraform(canvasElementArray));
  }, [canvasElementArray]);

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex h-[40px] items-center border-b-[1px] border-gray-400 px-4 py-2 font-sans text-sm font-bold">
        Terraform Code Display
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
