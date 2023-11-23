export const ComputeResources = () => {
  const serviceList = [
    {
      name: "EC2",
      src: "/resources/compute/ec2.svg",
      width: 80,
      height: 80,
      resources: {
        ami: "",
        instance_type: "t2.micro",
        availability_zone: "",
        subnet_id: "",
        root_block_device: {
          volume_type: "",
          volume_size: "",
        },
        tags: {
          Name: "",
        },
      },
    },
  ];

  return serviceList;
};
