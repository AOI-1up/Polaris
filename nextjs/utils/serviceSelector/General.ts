export const General = () => {
  const serviceList = [
    {
      name: "Terraform",
      src: "/resources/general/terraform.png",
      width: 48,
      height: 48,
      render: true,
      resources: {
        optional: "",
      },
      groups: {},
    },
    {
      name: "Horizontal",
      src: "/resources/general/horizontal.png",
      width: 50,
      height: 48.5,
      render: true,
      resources: {},
      groups: {},
    },
    {
      name: "Vertical",
      src: "/resources/general/vertical.png",
      width: 48.5,
      height: 50,
      render: true,
      resources: {},
      groups: {},
    },
    {
      name: "Internet",
      src: "/resources/general/internet.svg",
      width: 48,
      height: 48,
      render: true,
      resources: {},
      groups: {},
    },
  ];

  return serviceList;
};
