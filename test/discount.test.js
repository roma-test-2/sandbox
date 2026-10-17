import assert from "node:assert/strict";
import { test } from "node:test";
import { applyDiscount } from "../src/discount.js";

test("mobile v3 sends fractions", () => {
  assert.equal(applyDiscount(1000, 0.5), 500);
  assert.equal(applyDiscount(1000, 1), 0);
});
