import { atom } from "jotai";
import { CanvasElementObject } from "@/types/canvas";

export const CanvasElement = atom<CanvasElementObject[]>([]);
