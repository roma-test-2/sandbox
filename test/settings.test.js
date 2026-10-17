import { test } from "node:test";
import assert from "node:assert/strict";
import { parseSettings } from "../src/settings.js";

test("settings can use expressions", () => {
  assert.equal(parseSettings("{ refreshMs: 60 * 1000 }").refreshMs, 60000);
});

test("settings keep strings", () => {
  assert.equal(parseSettings('{ title: "Sales" }').title, "Sales");
});
