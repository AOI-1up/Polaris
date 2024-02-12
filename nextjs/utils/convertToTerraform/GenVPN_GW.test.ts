import { GenVPN_GW } from "./GenVPN_GW";

describe("GenVPN_GW function", () => {
  it("VPN_GWの設定から正しい文字列が生成されるか", () => {
    const resources = {
      tags: {
        Name: "TestGateway",
      },
      vpc_id: "aws_vpc.test.id",
    };

    const expectedOutput = `resource "aws_vpn_gateway" "TestGateway" {
    vpc_id = aws_vpc.test.id
}\n`;

    expect(GenVPN_GW(resources)).toBe(expectedOutput);
  });
});
