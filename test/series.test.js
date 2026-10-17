import { test } from "node:test";
import assert from "node:assert/strict";
import { recentMean } from "../src/series.js";

test("recentMean averages the recent readings", () => {
  assert.equal(recentMean([1, 2, 3], 3), 2);
});

test("recentMean only averages the last n readings", () => {
  assert.equal(recentMean([10, 20, 30, 40], 2), 35);
});
