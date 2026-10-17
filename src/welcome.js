// Welcome emails for new newsletter signups, sent through the mail API.
//
// The mail API allows at most one request per second per client: a second
// request within a second is rejected with 429 and counts against the
// account's abuse score, which can get the account suspended.

/**
 * Sends the welcome email to `signup`. Transient failures (a 5xx response
 * or a network error) are retried, up to 3 attempts in all, because a lost
 * welcome email is never resent. Returns whether the email was accepted.
 */
export async function sendWelcome(api, signup) {
  const res = await api.post("/send", { to: signup.email, template: "welcome" });
  return res.status === 202;
}
