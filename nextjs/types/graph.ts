import { Resources } from "./resources";

export type GraphObject = {
  id: string;
  service: string;
  resources: Resources;
  relation: [];
};
