export type ResourceType = "Compute Resources" | "Groups";

export interface Props {
  resources: ResourceType;
}

export type Service = {
  type: ResourceType;
};

export type Resources =
  | Record<string, unknown>
  | EC2_Resources
  | Region_Resources;

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
  tags: {
    Name: string;
  };
};
