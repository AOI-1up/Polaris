export const Networking = () => {
  const serviceList = [
    {
      name: "Internet_Gateway",
      src: "/resources/networking/internet_gateway.svg",
      width: 40,
      height: 40,
      resources: {
        tags: {
          Name: "",
        },
        vpc_id: "",
      },
      groups: {},
    },
  ];

  return serviceList;
};
