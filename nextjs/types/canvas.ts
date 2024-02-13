import { Groups } from "./groups";
import { Resources } from "./resources";

export interface CanvasStateObject {
  canvas: HTMLCanvasElement | null;
  canvasContainer: HTMLDivElement | null;
  context: CanvasRenderingContext2D | null;
}

export type CanvasElementObject = {
  id: string;
  service: string;
  src: string;
  x: number;
  y: number;
  width: number;
  height: number;
  render: boolean;
  resources: Resources;
  groups: Groups;
};
