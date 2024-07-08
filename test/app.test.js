import { describe, it, expect } from "vitest";
import { calcThirdAngle } from "../src/app.js";

describe("calcThirdAngle", () => {
  it("should return 90 for angles 30 and 60", () => {
    expect(calcThirdAngle(30, 60)).toBe(90);
  });

  it("should return 60 for angles 60 and 60", () => {
    expect(calcThirdAngle(60, 60)).toBe(60);
  });

  it("should return 59 for angles 43 and 78", () => {
    expect(calcThirdAngle(43, 78)).toBe(59);
  });

  it("should return 150 for angles 10 and 20", () => {
    expect(calcThirdAngle(10, 20)).toBe(150);
  });

});