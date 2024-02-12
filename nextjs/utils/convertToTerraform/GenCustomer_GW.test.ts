import { GenCustomer_GW } from "./GenCustomer_GW";

describe("GenCustomer_GW function", () => {
  it("GenCustomer_GWの設定から正しい文字列が生成されるか", () => {
    const resources = {
      tags: {
        Name: "TestGateway",
      },
      bgp_asn: "65000",
      ip_address: "172.0.0.1",
      type: "ipsec.1",
    };

    const expectedOutput = `resource "aws_customer_gateway" "TestGateway" {
    bgp_asn    = 65000
    ip_address = "172.0.0.1"
    type       = "ipsec.1"
}\n`;

    expect(GenCustomer_GW(resources)).toBe(expectedOutput);
  });
});
