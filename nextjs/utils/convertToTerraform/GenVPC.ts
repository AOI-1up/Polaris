import { VPC_Resources } from "@/types/resources";

export const GenVPC = (resources: VPC_Resources) => {
  const optional = resources.optional
    .split("\n")
    .map((line) => (line ? "  " + line : line))
    .join("\n");

  return `resource "aws_vpc" "${resources.tags.Name}" {
  cidr_block = "${resources.cidr_block}"
  tags = {
    Name = "${resources.tags.Name}"
  }${resources.optional ? `\n${optional}\n}\n` : "\n}\n"}`;
};
