const test = require("node:test");
const assert = require("node:assert");
const { clamp, pageSize } = require("../src/range.js");

test("clamp", () => {
  assert.strictEqual(clamp(5, 0, 10), 5);
  assert.strictEqual(clamp(-1, 0, 10), 0);
  assert.strictEqual(clamp(15, 0, 10), 10);
});

test("pageSize", () => {
  assert.strictEqual(pageSize("50"), 50);
  assert.strictEqual(pageSize(undefined), 20);
});
