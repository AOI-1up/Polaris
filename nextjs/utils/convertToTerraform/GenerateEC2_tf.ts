import { EC2_Resources } from "@/types/resources";

export const GenerateEC2_tf = (resourcesArray: EC2_Resources[]) => {
  const code = resourcesArray.reduce((acc, resources) => {
    const optional = resources.optional
      .split("\n")
      .map((line) => (line ? "  " + line : line))
      .join("\n");

    return (
      acc +
      `resource "aws_instance" "${resources.tags.Name}" {
  ami = "${resources.ami}"
  instance_type = "${resources.instance_type}"
  availability_zone = "${resources.availability_zone}"
  subnet_id = ${resources.subnet_id}
  root_block_device {
    volume_type = "${resources.root_block_device.volume_type}"
    volume_size = "${resources.root_block_device.volume_size}"
  }
  tags = {
    Name = "${resources.tags.Name}"
  }${resources.optional ? `\n${optional}\n}\n` : "\n}\n"}`
    );
  }, "");

  return code;
};
