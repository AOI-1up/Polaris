import { atom } from "jotai";

export const CanvasAtom = atom<HTMLCanvasElement | null>(null);
export const CanvasContainerAtom = atom<HTMLDivElement | null>(null);
export const ContextAtom = atom<CanvasRenderingContext2D | null>(null);
