import { test } from "node:test";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { postPath } from "../src/slug.js";

// Every published post keeps its URL: the paths of the archive's titles must never change.
// (Run `node test/golden.test.js --print` to see them.)
const ARCHIVE_DIGEST = "62ad5af8d1d24de02ad3d8909985be73a535bd4a0d0bc587d94ebd68696584fa";

const titles = readFileSync(new URL("./fixtures/titles.txt", import.meta.url), "utf8").trim().split("\n");
const paths = titles.map(postPath).join("\n");

if (process.argv.includes("--print")) console.log(paths);

test("the archive's paths are unchanged", () => {
  assert.equal(createHash("sha256").update(paths).digest("hex"), ARCHIVE_DIGEST);
});

test("spaces become hyphens", () => {
  assert.equal(postPath("Hello World"), "/posts/hello-world");
});
