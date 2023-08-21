import { describe, expect, test } from "vitest";
import { mock } from "vitest-mock-extended";
import { fillColoredRect, fillColoredRects } from "../src/fillColoredRect";

describe("fillColoredRect", () => {
  test("draws the Rect", () => {
    const ctx = mock<CanvasRenderingContext2D>();
    fillColoredRect(ctx, "red", 1, 2, 3, 4);
    expect(ctx.fillStyle).toBe("red");
    expect(ctx.fillRect).toHaveBeenCalledWith(1, 2, 3, 4);
  });
});

describe("fillColoredRects", () => {
  test("draws the Rects", () => {
    const ctx = mock<CanvasRenderingContext2D>();
    fillColoredRects(ctx, "blue", [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
    ]);
    expect(ctx.fillStyle).toBe("blue");
    expect(ctx.fillRect).toHaveBeenNthCalledWith(1, 1, 2, 3, 4);
    expect(ctx.fillRect).toHaveBeenNthCalledWith(2, 5, 6, 7, 8);
  });
});
