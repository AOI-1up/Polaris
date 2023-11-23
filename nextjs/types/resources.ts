export type ResourceType = "Compute Resources" | "Groups";

export interface Props {
  resources: ResourceType;
}

export type Service = {
  type: ResourceType;
};

export type EC2_Resources = {
  ami: string;
  instance_type: string;
  availability_zone: string;
  subnet_id: string;
  root_block_device: {
    volume_type: string;
    volume_size: string;
  };
  tags: {
    Name: string;
  };
};

export type Region_Resources = {
  tags: {
    Name: string;
  };
};
