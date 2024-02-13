import { VPN_connection_Resources } from "@/types/resources";

export const GenVPN_Connection = (resources: VPN_connection_Resources) => {

  return `resource "aws_vpn_connection" "${resources.tags.Name}" {
    customer_gateway_id = ${resources.customer_gateway_id}
    vpn_gateway_id      = ${resources.vpn_gateway_id}
    type                = "${resources.type}"
    static_routes_only  = true
}\n`;
};
