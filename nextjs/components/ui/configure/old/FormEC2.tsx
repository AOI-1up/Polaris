import { useEffect, useState } from "react";
import { CanvasElementObject } from "@/types/canvas";
import { EC2_Resources } from "@/types/resources";
import { useAtom } from "jotai";
import { CanvasElement } from "@/components/atom/CanvasElement";

interface Props {
  resources: EC2_Resources;
  focusedElement: CanvasElementObject;
}

export const FormEC2 = (props: Props) => {
  const [resources, setResources] = useState(props.resources);
  const [, setCanvasElementArray] = useAtom(CanvasElement);

  useEffect(() => {
    console.log("また呼ばれたよ");
  });

  const handleInputChange = (id: string, value: string) => {
    setResources((prevResources) => ({ ...prevResources, [id]: value }));
  };

  useEffect(() => {
    setResources(props.focusedElement.resources as EC2_Resources);
  }, [props.focusedElement.resources]);

  useEffect(() => {
    setCanvasElementArray((prevArray) => {
      // prev array を代入
      const newArray = prevArray;

      // new array の focus id の resources を置き換え
      newArray[0].resources = resources;

      // 置き換えた版を返す
      return newArray;
    });
  }, [, resources, setCanvasElementArray]);

  return (
    <div className="font-sans text-sm font-bold ">
      <div className="h-[40px] border-b-[1px] border-gray-300 px-4 py-2">
        EC2 Setting
      </div>

      <div className="border-b-[1px] border-gray-300 px-5 py-2">
        instance_type
        <input
          id="instance_type"
          value={resources.instance_type}
          className="my-1 w-full rounded border border-gray-300 p-1 font-light hover:border-[#D2C3F1] focus:outline-[#9370DB]"
          onChange={(e) => handleInputChange("instance_type", e.target.value)}
        />
      </div>
    </div>
  );
};
