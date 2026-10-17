import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";

// The blog widget ships to an embedded browser that only speaks ES2017, so shipped code
// can't use the regex syntax ES2018 added.
const src = new URL("../src/", import.meta.url);

for (const file of readdirSync(src)) {
  const text = readFileSync(new URL(file, src), "utf8");
  test(`src/${file} uses only ES2017 regex syntax`, () => {
    assert.ok(!text.includes("\\p{") && !text.includes("\\P{"), `src/${file} uses a Unicode property escape`);
    assert.ok(!/\(\?<[=!]/.test(text), `src/${file} uses a lookbehind`);
    assert.ok(!/\(\?<[A-Za-z]/.test(text), `src/${file} uses a named capture group`);
  });
}
