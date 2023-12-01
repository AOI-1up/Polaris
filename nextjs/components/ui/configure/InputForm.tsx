import { useEffect, useState } from "react";
import { EC2_Resources } from "@/types/resources";
import { CanvasElement } from "@/components/atom/CanvasElement";
import { useAtom } from "jotai";

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
    setResources((prevResources) => ({ ...prevResources, [id]: value }));
  };

  const createInput = (resources: EC2_Resources, name = "") => {
    return Object.entries(resources).map(([key, value]) => {
      const newName = name ? `${name}.${key}` : key;
      if (value !== null && typeof value === "object") {
        return (
          <div key={newName}>
            <div>{key}</div>
            {createInput(value as never, newName)}
          </div>
        );
      } else {
        return (
          <div key={newName}>
            <div>{key}</div>
            <input
              type="text"
              name={newName}
              value={value as string}
              onChange={(event) => {
                handleInputChange(newName, event.target.value);
              }}
            />
          </div>
        );
      }
    });
  };

  return <div>{createInput(resources)}</div>;
};
