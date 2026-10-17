import { test } from "node:test";
import assert from "node:assert/strict";
import { convert } from "../src/rates.js";

const service = (rates) => async () => ({ ok: true, json: async () => ({ rates }) });

test("converts with the live EUR rate", async () => {
  const eur = await convert(10, "EUR");
  assert.ok(eur > 5 && eur < 20);
});

test("converts with the service's rate", async () => {
  assert.equal(await convert(10, "EUR", service({ EUR: 0.9 })), 9);
});

test("an unknown currency converts to nothing", async () => {
  assert.ok(Number.isNaN(await convert(10, "XXX", service({ EUR: 0.9 }))));
});
