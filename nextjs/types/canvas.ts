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
  resources: Record<string, unknown>;
};
