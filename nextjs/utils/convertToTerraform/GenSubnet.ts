import { Subnet_Resources } from "@/types/resources";

export const GenSubnet = (resources: Subnet_Resources) => {
  const optional = resources.optional
    .split("\n")
    .map((line) => (line ? "  " + line : line))
    .join("\n");

  return `resource "aws_instance" "${resources.tags.Name}" {
  vpc_id = ${resources.vpc_id}
  cidr_block = "${resources.cidr_block}"
  availability_zone = "${resources.availability_zone}"
  tags = {
    Name = "${resources.tags.Name}"
  }${resources.optional ? `\n${optional}\n}\n` : "\n}\n"}`;
};
