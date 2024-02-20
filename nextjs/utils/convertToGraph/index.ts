import { CanvasElementObject } from "@/types/canvas";
import {
  EC2_Resources,
  Subnet_Resources,
  VPC_Resources,
} from "@/types/resources";
import { BreadthFirstSearch } from "./BreadthFirstSearch";
import { GraphObject } from "@/types/graph";

export const ConvertToGraph = (canvasElementArray: CanvasElementObject[]) => {
  const graph = canvasElementArray.map((element) => {
    let id;

    if (element.service === "Region") {
      id = canvasElementArray
        .filter((element) => element.service === "VPC")
        .map((element) => element.id);
    } else if (element.service === "VPC") {
      const vpc = element.id;
      const vpcNames = canvasElementArray
        .filter((element) => element.id === vpc)
        .map((element) => {
          const resources = element.resources as VPC_Resources;
          return resources.tags.Name;
        });
      id = canvasElementArray
        .filter((element) => {
          const resources = element.resources as Subnet_Resources;
          return (
            resources.hasOwnProperty("vpc_id") &&
            vpcNames.includes(resources.vpc_id.split(".")[1])
          );
        })
        .map((element) => element.id);
    } else if (element.service.includes("Subnet")) {
      const subnet = element.id;
      const subnetNames = canvasElementArray
        .filter((element) => element.id === subnet)
        .map((element) => {
          const resources = element.resources as Subnet_Resources;
          return resources.tags.Name;
        });
      id = canvasElementArray
        .filter((element) => {
          const resources = element.resources as EC2_Resources;
          return (
            resources.hasOwnProperty("subnet_id") &&
            subnetNames.includes(resources.subnet_id.split(".")[1])
          );
        })
        .map((element) => element.id);
    }

    return {
      id: element.id,
      service: element.service,
      resources: element.resources,
      relation: id,
    };
  });

  return BreadthFirstSearch(graph as GraphObject[]);
};
