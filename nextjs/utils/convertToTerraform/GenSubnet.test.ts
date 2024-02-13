import { GenSubnet } from "./GenSubnet";

describe("GenSubnet function", () => {
  it("Subnetの設定から正しい文字列が生成されるか", () => {
    const resources = {
      vpc_id: "aws_vpc.test.id",
      cidr_block: "10.0.0.0/16",
      availability_zone: "us-west-2a",
      tags: {
        Name: "test-subnet"
      },
      optional: ""
    };

    const expectedOutput = `resource "aws_subnet" "test-subnet" {
  vpc_id = aws_vpc.test.id
  cidr_block = "10.0.0.0/16"
  availability_zone = "us-west-2a"
  tags = {
    Name = "test-subnet"
  }
}\n`;

    expect(GenSubnet(resources)).toBe(expectedOutput);
  });
});
