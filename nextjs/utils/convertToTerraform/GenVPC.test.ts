import { GenVPC } from "./GenVPC";

describe("GenVPC function", () => {
  it("VPCの設定から正しい文字列が生成されるか", () => {
    const resources = {
      cidr_block: "10.0.0.0/16",
      tags: {
        Name: "test-vpc"
      },
      optional: ""
    };

    const expectedOutput = `resource "aws_vpc" "test-vpc" {
  cidr_block = "10.0.0.0/16"
  tags = {
    Name = "test-vpc"
  }
}\n`;

    expect(GenVPC(resources)).toBe(expectedOutput);
  });
});
