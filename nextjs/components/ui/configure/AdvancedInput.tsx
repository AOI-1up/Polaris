import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { AccordionIcon } from "../AccordionIcon";

export const AdvancedInput = () => {
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
        className="h-[40px] border-b-[1px] border-gray-300 px-4 py-2 font-sans text-sm font-bold"
      >
        Advanced Settings
      </AccordionHeader>
      <AccordionBody className="w-full border-b-[1px] border-gray-300 px-2 py-1 text-blue-gray-900">
        <div className="px-4 font-sans text-sm font-bold">
          Manual
          <textarea className="my-2 h-[200px] w-full resize-none rounded border-b-[1px] border-r-[1px] border-gray-300 p-1 font-light" />
        </div>
      </AccordionBody>
    </Accordion>
  );
};
