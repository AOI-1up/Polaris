import { useEffect, useState } from "react";
import { EC2_Resources } from "@/types/resources";
import { CanvasElement } from "@/components/atom/CanvasElement";
import { useAtom } from "jotai";
import set from "lodash/set";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { AccordionIcon } from "../AccordionIcon";
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
          <div key={newName} className="px-4 font-sans text-sm font-bold">
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

  const [open, setOpen] = useState(1);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <div>
      <Accordion
        open={open === 1}
        icon={<AccordionIcon id={1} open={open} />}
        className="flex w-full flex-col"
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="h-[40px] border-y-[1px] border-gray-300 px-4 py-2 font-sans text-sm font-bold"
        >
          Basic Settings
        </AccordionHeader>
        <AccordionBody className="w-full border-b-[1px] border-gray-300 px-2 py-1 text-blue-gray-900">
          <div className="py-2 font-sans text-sm">{createInput(resources)}</div>
        </AccordionBody>
      </Accordion>

      <AdvancedInput />
    </div>
  );
};
