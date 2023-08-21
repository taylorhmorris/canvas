/**
 * Draws a rotated image on the canvas
 * @param context the canvas context to draw on
 * @param image the image to draw
 * @param dx the x position for the image
 * @param dy the y position for the image
 * @param dw the width for the image
 * @param dh the height for the image
 * @param rotation the rotation to perform (in radians)
 */
export function drawRotatedImage(
  context: CanvasRenderingContext2D,
  image: HTMLImageElement,
  dx: number,
  dy: number,
  dw: number,
  dh: number,
  rotation: number,
) {
  const x = dx;
  const y = dy;
  context.save();
  context.translate(x + dw / 2, y + dh / 2);
  context.rotate(rotation);
  context.drawImage(image, -dw / 2, -dh / 2, dw, dh);
  context.restore();
}
