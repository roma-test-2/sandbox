import { test } from "node:test";
import assert from "node:assert/strict";

import { greet } from "../src/greet.js";

test("greets someone by name", () => {
  assert.equal(greet("Ada"), "Hello, Ada!");
});

test("greets the world when the name is empty", () => {
  assert.equal(greet(""), "Hello, world!");
});

test("greets the world when no name is given", () => {
  assert.equal(greet(), "Hello, world!");
});
