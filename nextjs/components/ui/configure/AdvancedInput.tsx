import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { AccordionIcon } from "../AccordionIcon";
import { EC2_Resources } from "@/types/resources";
import { useAtom } from "jotai";
import { CanvasElement } from "@/components/atom/CanvasElement";

interface Props {
  resources: EC2_Resources;
  index: number;
}

export const AdvancedInput = (props: Props) => {
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

  const handleTextareaChange = (value: string) => {
    setResources((prevResources) => {
      const updatedResources = { ...prevResources };
      updatedResources.optional = value;
      return updatedResources;
    });
  };

  const [open, setOpen] = useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <Accordion
      open={open === 1}
      icon={<AccordionIcon id={1} open={open} />}
      className="flex w-full flex-col"
    >
      <AccordionHeader
        onClick={() => handleOpen(1)}
        className="h-[40px] border-b-[1px] border-gray-400 px-4 py-2 font-sans text-sm font-bold"
      >
        Advanced Settings
      </AccordionHeader>
      <AccordionBody className="w-full border-b-[1px] border-gray-400 px-2 py-1 text-blue-gray-900">
        <div className="px-4 font-sans text-sm font-bold">
          Manual
          <textarea
            value={resources.optional}
            className="my-2 h-[200px] w-full resize-none rounded border-b-[1px] border-r-[1px] border-gray-400 p-1 font-light"
            onChange={(event) => handleTextareaChange(event.target.value)}
          />
        </div>
      </AccordionBody>
    </Accordion>
  );
};
