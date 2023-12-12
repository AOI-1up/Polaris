import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { AccordionIcon } from "../AccordionIcon";
import { ArchitectureIcon } from "./ArchitectureIcon";
import { Props } from "@/types/resources";

export const CustomAccordion = (props: Props) => {
  const [open, setOpen] = useState(1);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <div className="select-none border-l-2 border-gray-300 bg-gray-100">
      <Accordion
        open={open === 1}
        icon={<AccordionIcon id={1} open={open} />}
        className="flex w-full flex-col"
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="h-[40px] border-b-[1px] border-gray-300 px-4 py-2 font-sans text-sm font-bold"
        >
          {props.resources}
        </AccordionHeader>
        <AccordionBody className="w-full border-b-[1px] border-gray-300 px-2 py-1">
          <ArchitectureIcon resources={props.resources} />
        </AccordionBody>
      </Accordion>
    </div>
  );
};
