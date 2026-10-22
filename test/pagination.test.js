import { test } from "node:test";
import assert from "node:assert/strict";
import { paginate, parsePageParams } from "../src/pagination.js";

test("returns the requested page", () => {
  assert.deepEqual(paginate([1, 2, 3, 4, 5], 2, 2), [3, 4]);
});

test("parses page params with defaults", () => {
  assert.deepEqual(parsePageParams({}), { page: 1, pageSize: 20 });
});
