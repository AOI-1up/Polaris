export type ResourceType =
  | "Compute Resources"
  | "Groups"
  | "Networking"
  | "General";

export interface Props {
  resources: ResourceType;
}

export type Service = {
  type: ResourceType;
};

export type Resources =
  | EC2_Resources
  | Region_Resources
  | VPC_Resources
  | Subnet_Resources
  | IGW_Resources
  | General_Resources;

export type CombinedResources = EC2_Resources &
  Region_Resources &
  VPC_Resources &
  Subnet_Resources &
  IGW_Resources;

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

export type Region_Resources = {
  region: string;
  optional: string;
};

export type VPC_Resources = {
  tags: {
    Name: string;
  };
  cidr_block: string;
  optional: string;
};

export type Subnet_Resources = {
  tags: {
    Name: string;
  };
  vpc_id: string;
  cidr_block: string;
  availability_zone: string;
  optional: string;
};

export type IGW_Resources = {
  tags: {
    Name: string;
  };
  vpc_id: string;
};

export type General_Resources = object;
