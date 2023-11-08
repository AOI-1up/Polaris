export const ValidateCanvasPosition = (position: {
  x: number;
  y: number;
  client: {
    x: number;
    y: number;
  };
  offset: {
    left: number;
    right: number;
    top: number;
    bottom: number;
  };
}) => {
  const { client, offset } = position;
  const isWithinX = client.x >= offset.left && client.x <= offset.right;
  const isWithinY = client.y >= offset.top && client.y <= offset.bottom;

  return isWithinX && isWithinY;
};
