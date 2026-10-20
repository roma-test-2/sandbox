const test = require("node:test");
const assert = require("node:assert");
const { parseOption } = require("../src/num.js");

test("parseOption", () => {
  assert.strictEqual(parseOption("3", 1), 3);
  assert.strictEqual(parseOption("x", 1), 1);
});
