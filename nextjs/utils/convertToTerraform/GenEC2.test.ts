import { GenEC2 } from "./GenEC2";

describe("GenEC2 function", () => {
  it("EC2の設定から正しい文字列が生成されるか", () => {
    const resources = {
      ami: "ami-0abcdef1234567890",
      instance_type: "t2.micro",
      availability_zone: "us-west-2a",
      subnet_id: "aws_subnet.test.id",
      root_block_device: {
        volume_type: "gp2",
        volume_size: "10",
      },
      tags: {
        Name: "TestInstance",
      },
      optional: "",
    };

    const expectedOutput = `resource "aws_instance" "TestInstance" {
  ami = "ami-0abcdef1234567890"
  instance_type = "t2.micro"
  availability_zone = "us-west-2a"
  subnet_id = aws_subnet.test.id
  root_block_device {
    volume_type = "gp2"
    volume_size = "10"
  }
  tags = {
    Name = "TestInstance"
  }\n}\n`;

    expect(GenEC2(resources)).toEqual(expectedOutput);
  });
});
