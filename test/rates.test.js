import { test } from "node:test";
import assert from "node:assert/strict";
import { convert, RateError } from "../src/rates.js";

const service = (rates) => async () => ({ ok: true, json: async () => ({ rates }) });

test("converts with the default fetch", async () => {
  const realFetch = globalThis.fetch;
  globalThis.fetch = service({ EUR: 0.9 });
  try {
    assert.equal(await convert(10, "EUR"), 9);
  } finally {
    globalThis.fetch = realFetch;
  }
});

test("converts with the service's rate", async () => {
  assert.equal(await convert(10, "EUR", service({ EUR: 0.9 })), 9);
});

test("an unknown currency throws a RateError", async () => {
  await assert.rejects(convert(10, "XXX", service({ EUR: 0.9 })), RateError);
});
