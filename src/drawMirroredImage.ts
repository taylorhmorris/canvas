/**
 * Draws a horizontally mirrored image on the canvas
 * @param ctx the canvas context to draw on
 * @param img the image to draw
 * @param x the x position for the image
 * @param y the y position for the image
 * @param width the width for the image
 * @param height the height for the image
 */
export function drawMirroredImage(
  ctx: CanvasRenderingContext2D,
  img: CanvasImageSource,
  x: number,
  y: number,
  width: number,
  height: number,
) {
  ctx.save();
  ctx.translate(x + width, y);
  ctx.scale(-1, 1);
  ctx.drawImage(img, -width / 2, -height / 2, width, height);
  ctx.restore();
}
