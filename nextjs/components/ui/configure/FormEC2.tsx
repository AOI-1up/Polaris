import { CanvasElement } from "@/components/atom/CanvasElement";
import { EC2_Resources } from "@/types/resources";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";

interface Props {
  resources: EC2_Resources;
  index: number;
}

export const FormEC2 = (props: Props) => {
  // resources を input に表示する用
  const [resources, setResources] = useState(props.resources);
  useEffect(() => {
    setResources(props.resources);
  }, [props.resources]);

  // input を変更する用
  const [, setCanvasElementArray] = useAtom(CanvasElement);
  const handleInputChange = (id: string, value: string) => {
    setResources((prevResources) => ({ ...prevResources, [id]: value }));

    // input の変更を jotai に適用する用
    setCanvasElementArray((prevArray) => {
      const newArray = prevArray;
      newArray[props.index].resources = resources;
      return newArray;
    });
  };


  // const handleInputBlur = () => {
  //   console.log("処理終わり");
  //   setCanvasElementArray((prevArray) => {
  //     const newArray = prevArray;
  //     newArray[props.index].resources = resources;
  //     return newArray;
  //   });
  // };

  // ほんとは props とかで渡すけど仮決め
  const id = "instance_type";

  return (
    <div className="font-sans text-sm font-bold ">
      <div>
        {id}
        <input
          id={id}
          value={resources[id]}
          onChange={(event) => handleInputChange(id, event.target.value)}
          //onBlur={handleInputBlur}
        />
      </div>
    </div>
  );
};
