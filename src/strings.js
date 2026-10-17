/** `s` cut to at most `n` characters, with an ellipsis when cut. */
export function truncate(s, n) {
  if (s.length <= n) return s;
  if (n <= 0) return "";
  return s.slice(0, n - 1) + "…";
}

/** `s` with its first letter upper-cased. */
export function capitalize(s) {
  if (s.length === 0) return s;
  return s[0].toUpperCase() + s.slice(1);
}
