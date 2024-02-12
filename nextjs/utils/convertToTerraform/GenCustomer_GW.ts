import { Customer_GW_Resources } from "@/types/resources";

export const GenCustomer_GW = (resources: Customer_GW_Resources) => {
  return `resource "aws_customer_gateway" "${resources.tags.Name}" {
    bgp_asn    = ${resources.bgp_asn}
    ip_address = "${resources.ip_address}"
    type       = "${resources.type}"
}\n`;
};
