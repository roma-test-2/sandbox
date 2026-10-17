import { test } from "node:test";
import assert from "node:assert/strict";
import { inRange } from "../src/range.js";

test("inRange includes both ends", () => {
  assert.equal(inRange(1, 1, 5), true);
  assert.equal(inRange(5, 1, 5), true);
  assert.equal(inRange(6, 1, 5), false);
});
