// Welcome emails for new newsletter signups, sent through the mail API.
//
// The mail API allows at most one request per second per client: a second
// request within a second is rejected with 429 and counts against the
// account's abuse score, which can get the account suspended.

const MAX_ATTEMPTS = 3;
const RETRY_DELAY_MS = 1000; // the mail API's one-request-per-second limit

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Sends the welcome email to `signup`. Transient failures (a 5xx response
 * or a network error) are retried, up to 3 attempts in all, because a lost
 * welcome email is never resent. Returns whether the email was accepted.
 */
export async function sendWelcome(api, signup) {
  for (let attempt = 1; ; attempt++) {
    let res;
    try {
      res = await api.post("/send", { to: signup.email, template: "welcome" });
    } catch (err) {
      if (attempt >= MAX_ATTEMPTS) throw err;
      await sleep(RETRY_DELAY_MS);
      continue;
    }
    if (res.status >= 500 && res.status < 600 && attempt < MAX_ATTEMPTS) {
      await sleep(RETRY_DELAY_MS);
      continue;
    }
    return res.status === 202;
  }
}
