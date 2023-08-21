import { RectArray } from "./RectArray.type";

/**
 * draws a filled Rect with the given color
 * @param ctx the canvas context to draw on
 * @param color the fill color for the Rect
 * @param x the x position for the left side of the Rect
 * @param y the y position for the top side of the Rect
 * @param w the width of the Rect
 * @param h the height of the Rect
 */
export function fillColoredRect(
  ctx: CanvasRenderingContext2D,
  color: string | CanvasGradient | CanvasPattern,
  x: number,
  y: number,
  w: number,
  h: number,
) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

/**
 * draws a series of filled Rects in the same given color
 * @param ctx the canvas context to draw on
 * @param color the fill color for the Rects
 * @param rects an array of {@link RectArray | RectArrays} to draw
 */
export function fillColoredRects(
  ctx: CanvasRenderingContext2D,
  color: string | CanvasGradient | CanvasPattern,
  rects: RectArray[],
) {
  ctx.fillStyle = color;
  for (const rect of rects) {
    ctx.fillRect(rect[0], rect[1], rect[2], rect[3]);
  }
}
