import { test, mock, afterEach } from "node:test";
import assert from "node:assert/strict";
import { EventEmitter } from "node:events";
import https from "node:https";
import { currentTemp } from "../src/weather.js";

/** Stub `https.get` so it answers with `statusCode` and `body` instead of calling wttr.in. */
function stubResponse(statusCode, body) {
  mock.method(https, "get", (url, options, callback) => {
    const req = new EventEmitter();
    req.destroy = (err) => err && req.emit("error", err);
    process.nextTick(() => {
      const res = new EventEmitter();
      res.statusCode = statusCode;
      res.resume = () => {};
      callback(res);
      res.emit("data", body);
      res.emit("end");
    });
    return req;
  });
}

afterEach(() => mock.restoreAll());

test("reads the current temperature in London", async () => {
  stubResponse(200, JSON.stringify({ current_condition: [{ temp_C: "12" }] }));
  const t = await currentTemp("London");
  assert.equal(t, 12);
  assert.match(https.get.mock.calls[0].arguments[0], /\/London\?format=j1$/);
});

test("reads the current temperature in Oslo", async () => {
  stubResponse(200, JSON.stringify({ current_condition: [{ temp_C: "-3" }] }));
  const t = await currentTemp("Oslo");
  assert.equal(t, -3);
});

test("rejects when the response is not the expected JSON", async () => {
  stubResponse(200, "Unknown location");
  await assert.rejects(currentTemp("Nowhere"));
});

test("rejects on a non-200 status", async () => {
  stubResponse(503, "<html>Service Unavailable</html>");
  await assert.rejects(currentTemp("London"), /status 503/);
});
