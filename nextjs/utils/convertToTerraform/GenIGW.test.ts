import { GenIGW } from "./GenIGW";

describe("GenIGW function", () => {
  it("IGWの設定から正しい文字列が生成されるか", () => {
    const resources = {
      tags: {
        Name: "TestGateway"
      },
      vpc_id: "aws_vpc.test.id"
    };

    const expectedOutput = `resource "aws_internet_gateway" "TestGateway" {
    vpc_id = aws_vpc.test.id
}\n`;

    expect(GenIGW(resources)).toBe(expectedOutput);
  });
});
