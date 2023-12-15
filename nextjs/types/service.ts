import { Groups } from "./groups";
import { Resources } from "./resources";

export interface ServiceIcon {
  name: string;
  src: string;
  width: number;
  height: number;
  resources: Resources;
  groups: Groups;
}
