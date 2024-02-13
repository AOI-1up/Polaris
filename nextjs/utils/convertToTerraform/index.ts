import { CanvasElementObject } from "@/types/canvas";
import { sort } from "fast-sort";
import {
  Customer_GW_Resources,
  EC2_Resources,
  IGW_Resources,
  Region_Resources,
  Subnet_Resources,
  Terraform_Resources,
  VPC_Resources,
  VPN_GW_Resources,
  VPN_connection_Resources,
} from "@/types/resources";
import { GenEC2 } from "./GenEC2";
import { GenVPC } from "./GenVPC";
import { GenSubnet } from "./GenSubnet";
import { GenRegion } from "./GenRegion";
import { GenIGW } from "./GenIGW";
import { GenVPN_GW } from "./GenVPN_GW";
import { GenCustomer_GW } from "./GenCustomer_GW";
import { GenVPN_Connection } from "./GenVPN_Connection";
import { GenTerraform } from "./GenTerraform";

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
      return GenIGW(element.resources as IGW_Resources);
    else if (element.service === "VPN_Gateway")
      return GenVPN_GW(element.resources as VPN_GW_Resources);
    else if (element.service === "Customer_Gateway")
      return GenCustomer_GW(element.resources as Customer_GW_Resources);
    else if (element.service === "VPN_Connection")
      return GenVPN_Connection(element.resources as VPN_connection_Resources);
    else if (element.service === "Terraform")
      return GenTerraform(element.resources as Terraform_Resources);
    else return null;
  });

  return code.filter(Boolean).join("\n");
};
