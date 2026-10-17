/** `s` cut to at most `n` characters, with an ellipsis when cut. */
export function truncate(s, n) {
  if (s.length <= n) return s;
  return s.slice(0, n) + "…";
}

/** `s` with its first letter upper-cased. */
export function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}
