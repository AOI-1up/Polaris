import { Region_Resources } from "@/types/resources";

export const GenRegion = (resources: Region_Resources) => {
  const optional = resources.optional
    .split("\n")
    .map((line) => (line ? "  " + line : line))
    .join("\n");

  return `provider "aws" {
  region = "${resources.region}"${resources.optional ? `\n${optional}\n}\n` : "\n}\n"}`;
};
