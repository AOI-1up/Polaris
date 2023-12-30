export const Groups = () => {
  const serviceList = [
    {
      name: "Region",
      src: "/resources/groups/region.svg",
      width: 40,
      height: 40,
      resources: {
        region: "",
        optional: "",
      },
      groups: {
        width: 500,
        height: 400,
        color: "#00A4A6",
      },
    },
    {
      name: "VPC",
      src: "/resources/groups/vpc.svg",
      width: 40,
      height: 40,
      resources: {
        tags: {
          Name: "",
        },
        cidr_block: "",
        optional: "",
      },
      groups: {
        width: 400,
        height: 300,
        color: "#8C4FFF",
      },
    },
    {
      name: "Private_Subnet",
      src: "/resources/groups/private_subnet.svg",
      width: 40,
      height: 40,
      resources: {
        tags: {
          Name: "",
        },
        vpc_id: "",
        cidr_block: "",
        availability_zone: "",
        optional: "",
      },
      groups: {
        width: 300,
        height: 200,
        color: "#00A4A6",
      },
    },
    {
      name: "Public_Subnet",
      src: "/resources/groups/public_subnet.svg",
      width: 40,
      height: 40,
      resources: {
        tags: {
          Name: "",
        },
        vpc_id: "",
        cidr_block: "",
        availability_zone: "",
        optional: "",
      },
      groups: {
        width: 300,
        height: 200,
        color: "#7AA116",
      },
    },
  ];

  return serviceList;
};
