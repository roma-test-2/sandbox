import { test } from "node:test";
import assert from "node:assert/strict";
import { slugify } from "./slugify.js";

test("lowercases and joins words with a single dash", () => {
  assert.equal(slugify("Hello, World!"), "hello-world");
});

test("trims leading and trailing dashes and whitespace", () => {
  assert.equal(slugify("  --a  b--  "), "a-b");
});

test("collapses runs of non-alphanumeric characters", () => {
  assert.equal(slugify("a!!!___b...c"), "a-b-c");
});

test("keeps digits", () => {
  assert.equal(slugify("Version 2.0 Release"), "version-2-0-release");
});

test("keeps non-ASCII letters", () => {
  assert.equal(slugify("Crème Brûlée"), "crème-brûlée");
});

test("returns an empty string when there are no letters or digits", () => {
  assert.equal(slugify(""), "");
  assert.equal(slugify("  --!!--  "), "");
});
