import { describe, expect, it } from "vitest";
import { isHandheldRelevantUrl } from "../handheld-ultrasound.ts";

describe("isHandheldRelevantUrl", () => {
  it("matches handheld ultrasound product and integration terms", () => {
    expect(isHandheldRelevantUrl("https://example.com/vscan-air-dicom-workflow")).toBe(true);
    expect(isHandheldRelevantUrl("https://example.com/portable-ultrasound-scan-guidance")).toBe(true);
  });

  it("does not match unrelated corporate news", () => {
    expect(isHandheldRelevantUrl("https://example.com/investor-quarterly-results")).toBe(false);
    expect(isHandheldRelevantUrl("https://clarius.com/company-announces-quarterly-results/")).toBe(false);
  });
});
