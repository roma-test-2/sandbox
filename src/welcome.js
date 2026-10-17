// Welcome emails for new newsletter signups, sent through the mail API.
//
// The mail API allows at most one request per second per client: a second
// request within a second is rejected with 429 and counts against the
// account's abuse score, which can get the account suspended.

const MAX_ATTEMPTS = 3;
const MIN_REQUEST_INTERVAL_MS = 1000; // the mail API's one-request-per-second limit
// Extra spacing on top of the limit, so ordinary network and timer jitter
// doesn't make two requests reach the mail API less than a second apart.
const REQUEST_INTERVAL_MARGIN_MS = 250;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Earliest time the next request to the mail API may start. Shared by every
// sendWelcome call, so sequential and concurrent calls stay under the limit.
let nextRequestAt = 0;

// Waits for the next free one-second slot. The slot is reserved before
// waiting, so concurrent callers each get their own slot. Uses the monotonic
// clock, so a wall-clock jump can't stall or bunch up requests.
async function waitForRequestSlot() {
  const now = performance.now();
  const startAt = Math.max(now, nextRequestAt);
  nextRequestAt = startAt + MIN_REQUEST_INTERVAL_MS + REQUEST_INTERVAL_MARGIN_MS;
  if (startAt > now) await sleep(startAt - now);
}

/**
 * Sends the welcome email to `signup`. Transient failures (a 5xx response
 * or a network error) are retried, up to 3 attempts in all, because a lost
 * welcome email is never resent. Returns whether the email was accepted;
 * if the last attempt fails with a network error, that error is thrown.
 */
export async function sendWelcome(api, signup) {
  for (let attempt = 1; ; attempt++) {
    let res;
    await waitForRequestSlot();
    try {
      res = await api.post("/send", { to: signup.email, template: "welcome" });
    } catch (err) {
      if (attempt >= MAX_ATTEMPTS) throw err;
      continue;
    }
    if (res.status >= 500 && res.status < 600 && attempt < MAX_ATTEMPTS) {
      continue;
    }
    return res.status === 202;
  }
}
