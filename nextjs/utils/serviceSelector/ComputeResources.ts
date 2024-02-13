export const ComputeResources = () => {
  const serviceList = [
    {
      name: "EC2",
      src: "/resources/compute/ec2.svg",
      width: 80,
      height: 80,
      render: true,
      resources: {
        tags: {
          Name: "",
        },
        ami: "",
        instance_type: "",
        availability_zone: "",
        subnet_id: "",
        root_block_device: {
          volume_type: "",
          volume_size: "",
        },
        optional: "",
      },
      groups: {},
    },
  ];

  return serviceList;
};
