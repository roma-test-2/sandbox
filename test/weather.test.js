import { test } from "node:test";
import assert from "node:assert/strict";
import { currentTemp } from "../src/weather.js";

test("reads the current temperature in London", async () => {
  const t = await currentTemp("London");
  assert.ok(t > -50 && t < 60);
});

test("reads the current temperature in Oslo", async () => {
  const t = await currentTemp("Oslo");
  assert.ok(t > -50 && t < 60);
});
