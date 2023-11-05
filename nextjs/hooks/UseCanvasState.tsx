import { useAtomValue } from "jotai";
import {
  CanvasAtom,
  CanvasContainerAtom,
  ContextAtom,
} from "@/components/atom/CanvasState";

export const UseCanvasState = () => {
  const canvas = useAtomValue(CanvasAtom);
  const canvasContainer = useAtomValue(CanvasContainerAtom);
  const context = useAtomValue(ContextAtom);

  return { canvas, canvasContainer, context };
};
