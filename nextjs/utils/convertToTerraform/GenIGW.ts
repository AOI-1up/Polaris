import { IGW_Resources } from "@/types/resources";

export const GenIGW = (resources: IGW_Resources) => {

  return `resource "aws_internet_gateway" "${resources.tags.Name}" {
    vpc_id = ${resources.vpc_id}
}\n`;
};
