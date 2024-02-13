import { Terraform_Resources } from "@/types/resources";

export const GenTerraform = (resources: Terraform_Resources) => {
  return `${resources.optional}\n`;
};
