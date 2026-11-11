import { describe, expect, it } from "vitest";
import { messages } from "./messages";

function leafValues(value: unknown): string[] {
  if (typeof value === "string") return [value];
  if (value !== null && typeof value === "object") {
    return Object.values(value).flatMap(leafValues);
  }
  return [];
}

describe("translations", () => {
  it.each(["en", "hi"] as const)("has no empty strings in %s", (language) => {
    const values = leafValues(messages[language]);
    expect(values.length).toBeGreaterThan(0);
    for (const value of values) {
      expect(value.trim()).not.toBe("");
    }
  });

  it("has the same number of strings in English and Hindi", () => {
    expect(leafValues(messages.hi)).toHaveLength(leafValues(messages.en).length);
  });

  it("uses Hindi text that differs from English", () => {
    expect(messages.hi.tagline).not.toBe(messages.en.tagline);
    expect(messages.hi.nav.home).not.toBe(messages.en.nav.home);
  });
});
