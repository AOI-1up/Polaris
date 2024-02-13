import { Position } from "@/types/position";

export const ValidateCanvasPosition = (position: Position) => {
  const { client, offset } = position;
  const isWithinX = client.x >= offset.left && client.x <= offset.right;
  const isWithinY = client.y >= offset.top && client.y <= offset.bottom;

  return isWithinX && isWithinY;
};
