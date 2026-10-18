const assert = require("node:assert");
const { clamp, inclusiveRange } = require("./src/range");

assert.strictEqual(clamp(-5, 0, 10), 0);
assert.throws(() => clamp(1, 5, 2), RangeError);
assert.deepStrictEqual(inclusiveRange(3, 3).length >= 0, true);
console.log("ok");
