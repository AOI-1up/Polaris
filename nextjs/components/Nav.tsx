"use client";
import { CustomAccordion } from "./ui/select/CustomAccordion";

export const Nav = () => {
  return (
    <div className="h-full select-none border-r-2 border-gray-300 bg-gray-100">
      <CustomAccordion resources="Compute Resources" />
      <CustomAccordion resources="Groups" />
    </div>
  );
};
