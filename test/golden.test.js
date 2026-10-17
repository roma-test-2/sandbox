import { test } from "node:test";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { postPath } from "../src/slug.js";

// The archive's post paths, pinned, so a change to them is always deliberate. When a
// change is intended, set ARCHIVE_DIGEST to the new digest this test prints.
const ARCHIVE_DIGEST = "47d569f65dbbae0e5a5039ce119da2d5c20d8333c12d221f8925bddb9779a954";

const titles = readFileSync(new URL("./fixtures/titles.txt", import.meta.url), "utf8").trim().split("\n");
const paths = titles.map(postPath);
const digest = createHash("sha256").update(paths.join("\n")).digest("hex");

test("the archive's paths are pinned", () => {
  assert.equal(digest, ARCHIVE_DIGEST, `the archive's paths changed (new digest ${digest}):\n${paths.join("\n")}`);
});
