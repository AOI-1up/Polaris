import { VPC_Resources } from "@/types/resources";

export const GenerateVPC_tf = (resourcesArray: VPC_Resources[]) => {
  const code = resourcesArray.reduce((acc, resources) => {
    const optional = resources.optional
      .split("\n")
      .map((line) => (line ? "  " + line : line))
      .join("\n");

    return (
      acc +
      `resource "aws_vpc" "${resources.tags.Name}" {
  cidr_block = "${resources.cidr_block}"
  tags = {
    Name = "${resources.tags.Name}"
  }${resources.optional ? `\n${optional}\n}\n` : "\n}\n"}`
    );
  }, "");

  return code;
};
