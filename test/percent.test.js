import { test } from "node:test";
import assert from "node:assert/strict";

import { percent } from "../src/percent.js";

test("percent(1, 4) is 25", () => {
  assert.equal(percent(1, 4), 25);
});

test("percent(1, 3) is rounded to one decimal place", () => {
  assert.equal(percent(1, 3), 33.3);
  assert.equal(percent(2, 3), 66.7);
});

test("percent handles whole and zero parts", () => {
  assert.equal(percent(0, 5), 0);
  assert.equal(percent(5, 5), 100);
});
