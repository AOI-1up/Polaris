"use client";
import { CustomAccordion } from "./ui/select/CustomAccordion";

export const Nav = () => {
  return (
    <div className="h-full select-none border-x-2 border-gray-400 bg-gray-100">
      <CustomAccordion resources="Compute Resources" />
      <CustomAccordion resources="Groups" />
    </div>
  );
};
