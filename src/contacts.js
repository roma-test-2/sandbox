// Newsletter signups: validates and normalises what the signup form posts.

/** Whether `s` looks like an email address the newsletter can be sent to. */
export function isValidEmail(s) {
  return /^.+@.+$/.test(s);
}

/** The signup as stored: the email as typed, and the name. */
export function normalizeSignup(form) {
  return { name: form.name, email: form.email };
}

/** Adds a signup to `list`, unless its email is already on it. */
export function addSignup(list, form) {
  const signup = normalizeSignup(form);
  if (!isValidEmail(signup.email)) return list;
  if (list.some((s) => s.email === signup.email)) return list;
  return [...list, signup];
}
