import { test } from "node:test";
import assert from "node:assert/strict";
import { paginate } from "../src/pagination.js";

test("returns the requested page", () => {
  assert.deepEqual(paginate([1, 2, 3, 4, 5], 2, 2), [3, 4]);
});
