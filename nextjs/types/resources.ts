export type ResourceType = "Compute Resources" | "Groups";

export interface Props {
  resources: ResourceType;
}

export type Service = {
  type: ResourceType;
};

export type Resources = EC2_Resources | VPC_Resources;

export type CombinedResources = EC2_Resources & VPC_Resources;

export type EC2_Resources = {
  tags: {
    Name: string;
  };
  ami: string;
  instance_type: string;
  availability_zone: string;
  subnet_id: string;
  root_block_device: {
    volume_type: string;
    volume_size: string;
  };
  optional: string;
};

export type VPC_Resources = {
  tags: {
    Name: string;
  };
  cidr_block: string;
  optional: string;
};
