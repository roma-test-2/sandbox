// Newsletter signups: validates and normalises what the signup form posts.

/** Whether `s` looks like an email address the newsletter can be sent to. */
export function isValidEmail(s) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

/** The signup as stored: the email as typed (trimmed), and the name. */
export function normalizeSignup(form) {
  return { name: form.name, email: String(form.email ?? "").trim() };
}

/** Adds a signup to `list`, unless its email is already on it (ignoring case). */
export function addSignup(list, form) {
  const signup = normalizeSignup(form);
  if (!isValidEmail(signup.email)) return list;
  const key = signup.email.toLowerCase();
  if (list.some((s) => String(s.email).trim().toLowerCase() === key)) return list;
  return [...list, signup];
}
