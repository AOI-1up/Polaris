import { Groups } from "./groups";
import { Resources } from "./resources";

export interface ServiceIcon {
  name: string;
  src: string;
  width: number;
  height: number;
  render: boolean;
  resources: Resources;
  groups: Groups;
}
