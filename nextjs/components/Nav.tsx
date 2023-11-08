"use client";
import { CustomAccordion } from "./ui/select/CustomAccordion";

export const Nav = () => {
  return (
    <div className="h-full select-none bg-gray-50 border-r-2 border-gray-300">
      <CustomAccordion resources="Compute Resources" />
      <CustomAccordion resources="Groups" />
    </div>
  );
};
