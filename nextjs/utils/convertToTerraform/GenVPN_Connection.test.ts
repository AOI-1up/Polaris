import { GenVPN_Connection } from "./GenVPN_Connection";

describe("GenVPN_Connection function", () => {
  it("VPN_Connectionの設定から正しい文字列が生成されるか", () => {
    const resources = {
      tags: {
        Name: "TestConnection",
      },
      customer_gateway_id: "aws_customer_gateway.test.id",
      vpn_gateway_id: "aws_vpn_gateway.test.id",
      type: "ipsec.1",
    };

    const expectedOutput = `resource "aws_vpn_connection" "TestConnection" {
    customer_gateway_id = aws_customer_gateway.test.id
    vpn_gateway_id      = aws_vpn_gateway.test.id
    type                = "ipsec.1"
    static_routes_only  = true
}\n`;

    expect(GenVPN_Connection(resources)).toBe(expectedOutput);
  });
});
