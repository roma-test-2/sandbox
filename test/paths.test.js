import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { postPath } from "../src/slug.js";

// Each line of paths.tsv: a title, and the path it must get.
const rows = readFileSync(new URL("./fixtures/paths.tsv", import.meta.url), "utf8")
  .trim()
  .split("\n")
  .map((line) => line.split("\t"));

for (const [title, path] of rows) {
  test(`${JSON.stringify(title)} → ${path}`, () => {
    assert.equal(postPath(title), path);
  });
}
