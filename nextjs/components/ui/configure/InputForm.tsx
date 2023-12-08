import { useEffect, useState } from "react";
import { EC2_Resources } from "@/types/resources";
import { CanvasElement } from "@/components/atom/CanvasElement";
import { useAtom } from "jotai";
import set from "lodash/set";
import { AdvancedInput } from "./AdvancedInput";

interface Props {
  resources: EC2_Resources;
  index: number;
}

export const InputForm = (props: Props) => {
  const [resources, setResources] = useState(props.resources);
  const [canvasElementArray, setCanvasElementArray] = useAtom(CanvasElement);

  useEffect(() => {
    setResources(props.resources);
  }, [props.resources]);

  useEffect(() => {
    setCanvasElementArray((prevArray) => {
      const newArray = prevArray;
      newArray[props.index].resources = resources;
      return newArray;
    });
  }, [props.index, canvasElementArray, resources, setCanvasElementArray]);

  const handleInputChange = (id: string, value: string) => {
    setResources((prevResources) => {
      const updatedResources = { ...prevResources };
      set(updatedResources, id, value);
      return updatedResources;
    });
  };

  const createInput = (resources: EC2_Resources, name = "") => {
    return Object.entries(resources).map(([key, value]) => {
      const newName = name ? `${name}.${key}` : key;
      if (value !== null && typeof value === "object") {
        return <div key={newName}>{createInput(value as never, newName)}</div>;
      } else {
        return (
          <div key={newName} className="px-4">
            <div>{key}</div>
            <input
              type="text"
              name={newName}
              value={value as string}
              className="mb-2 mt-1 w-full rounded border-b-[1px] border-r-[1px] border-gray-300 p-1 font-light"
              onChange={(event) => {
                handleInputChange(newName, event.target.value);
              }}
            />
          </div>
        );
      }
    });
  };

  return (
    <div className="font-sans text-sm font-bold">
      <div className="border-b-[1px] border-gray-300 px-4 py-2">
        Basic Settings
      </div>
      <div className="pt-2">{createInput(resources)}</div>
      <AdvancedInput />
    </div>
  );
};
