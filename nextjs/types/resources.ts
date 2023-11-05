export type ResourceType = "Compute Resources" | "Groups";

export interface Props {
  resources: ResourceType;
}

export type Service = {
  type: ResourceType;
};
