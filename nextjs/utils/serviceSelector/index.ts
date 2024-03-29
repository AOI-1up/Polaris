import { match } from "ts-pattern";
import { Service } from "@/types/resources";
import { ComputeResources } from "./ComputeResources";
import { Groups } from "./Groups";
import { Networking } from "./Networking";
import { General } from "./General";

export const ServiceSelector = (service: Service) => {
  const { serviceList } = match(service.type)
    .with("Compute Resources", () => ({
      serviceList: ComputeResources(),
    }))
    .with("Groups", () => ({
      serviceList: Groups(),
    }))
    .with("Networking", () => ({
      serviceList: Networking(),
    }))
    .with("General", () => ({
      serviceList: General(),
    }))
    .exhaustive();

  return serviceList;
};
