export const InitCanvasBg = (
  canvasBg: HTMLCanvasElement,
  contextBg: CanvasRenderingContext2D,
) => {
  canvasBg.width = 5000;
  canvasBg.height = 5000;

  const gridSpacing = 30;
  contextBg.strokeStyle = "#ddd";
  contextBg.setLineDash([2, 4]);

  for (let x = 0; x <= canvasBg.width; x += gridSpacing) {
    contextBg.beginPath();
    contextBg.moveTo(x, 0);
    contextBg.lineTo(x, canvasBg.height);
    contextBg.stroke();
  }
  for (let y = 0; y <= canvasBg.height; y += gridSpacing) {
    contextBg.beginPath();
    contextBg.moveTo(0, y);
    contextBg.lineTo(canvasBg.width, y);
    contextBg.stroke();
  }

  contextBg.setLineDash([]);

  return;
};
