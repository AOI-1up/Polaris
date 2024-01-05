import { CanvasElementObject } from "@/types/canvas";
import { sort } from "fast-sort";
import { GenEC2 } from "./GenEC2";
import { GenVPC } from "./GenVPC";
import {
  EC2_Resources,
  IGW_Resources,
  Region_Resources,
  Subnet_Resources,
  VPC_Resources,
} from "@/types/resources";
import { GenSubnet } from "./GenSubnet";
import { GenRegion } from "./GenRegion";
import { GenIGW } from "./GenIGW"

export const convertToTerraform = (
  canvasElementArray: CanvasElementObject[],
) => {
  const sortedCanvasElementArray = sort(canvasElementArray).desc(
    (p) => p.service,
  );

  const code = sortedCanvasElementArray.map((element) => {
    if (element.service === "EC2")
      return GenEC2(element.resources as EC2_Resources);
    else if (element.service === "VPC")
      return GenVPC(element.resources as VPC_Resources);
    else if (element.service.includes("Subnet"))
      return GenSubnet(element.resources as Subnet_Resources);
    else if (element.service === "Region")
      return GenRegion(element.resources as Region_Resources);
    else if (element.service === "Internet_Gateway")
      return GenIGW(element.resources as IGW_Resources)
  });

  return code.join("\n");
};
