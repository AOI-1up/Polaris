import { EC2_Resources } from "@/types/resources";
import { InputField } from "./InputField";
import { useState } from "react";

interface Props {
  resources: EC2_Resources;
}

export const FormEC2 = (props: Props) => {
  console.log(props.resources.ami);
  const [resources, setResources] = useState(props.resources);

  const handleInputChange = (id: string, value: string) => {
    setResources((prevResources) => ({ ...prevResources, [id]: value }));
  };

  console.log(resources);
  return (
    <div className="font-sans font-bold text-sm ">
      <div className="h-[40px] px-4 py-2 border-b-[1px] border-gray-300">
        EC2 Setting
      </div>
      <InputField id="ami" onChange={handleInputChange} />
      <InputField id="instance_type" onChange={handleInputChange} />
      <InputField id="availability_zone" onChange={handleInputChange} />
      <InputField id="subnet_id" onChange={handleInputChange} />
      <div>
        root_block_device
        <InputField id="volume_type" onChange={handleInputChange} />
        <InputField id="volume_size" onChange={handleInputChange} />
      </div>
      <div>
        tags
        <InputField id="Name" onChange={handleInputChange} />
      </div>
    </div>
  );
};
