const assert = require("node:assert");
const { clamp, inclusiveRange } = require("./src/range");

assert.strictEqual(clamp(-5, 0, 10), 0);
assert.strictEqual(clamp(5, 0, 10), 5);
assert.strictEqual(clamp(15, 0, 10), 10);
assert.throws(() => clamp(1, 5, 2), RangeError);
assert.deepStrictEqual(inclusiveRange(3, 3), [3]);
assert.deepStrictEqual(inclusiveRange(1, 3), [1, 2, 3]);
console.log("ok");
