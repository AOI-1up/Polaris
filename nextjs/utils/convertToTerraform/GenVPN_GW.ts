import { VPN_GW_Resources } from "@/types/resources";

export const GenVPN_GW = (resources: VPN_GW_Resources) => {

  return `resource "aws_vpn_gateway" "${resources.tags.Name}" {
    vpc_id = ${resources.vpc_id}
}\n`;
};
