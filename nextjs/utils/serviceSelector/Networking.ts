export const Networking = () => {
  const serviceList = [
    {
      name: "Internet_Gateway",
      src: "/resources/networking/internet_gateway.svg",
      width: 40,
      height: 40,
      render: true,
      resources: {
        tags: {
          Name: "",
        },
        vpc_id: "",
      },
      groups: {},
    },
    {
      name: "VPN_Gateway",
      src: "/resources/networking/vpn_gateway.svg",
      width: 40,
      height: 40,
      render: true,
      resources: {
        tags: {
          Name: "",
        },
        vpc_id: "",
      },
      groups: {},
    },
    {
      name: "Customer_Gateway",
      src: "/resources/networking/customer_gateway.svg",
      width: 40,
      height: 40,
      render: true,
      resources: {
        tags: {
          Name: "",
        },
        bgp_asn: "",
        ip_address: "",
        type: "",
      },
      groups: {},
    },
    {
      name: "VPN_Connection",
      src: "/resources/networking/vpn_connection.svg",
      width: 40,
      height: 40,
      render: true,
      resources: {
        tags: {
          Name: "",
        },
        customer_gateway_id: "",
        vpn_gateway_id: "",
        type: "",
      },
      groups: {},
    },
  ];

  return serviceList;
};
