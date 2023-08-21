import { describe, expect, test } from "vitest";
import { mock } from "vitest-mock-extended";
import { drawRotatedImage } from "../src";

describe("fillColoredRect", () => {
  test("draws the Image", () => {
    const ctx = mock<CanvasRenderingContext2D>();
    const image = mock<HTMLImageElement>();
    const dw = 3;
    const dh = 4;
    drawRotatedImage(ctx, image, 1, 2, dw, dh, 5);
    expect(ctx.drawImage).toHaveBeenCalledWith(image, -dw / 2, -dh / 2, dw, dh);
  });
});
