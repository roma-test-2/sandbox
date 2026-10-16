/**
 * Small statistics helpers for the dashboard.
 */

/** The arithmetic mean of `xs`, or 0 for an empty list. */
export function average(xs) {
  if (xs.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < xs.length; i++) {
    sum += xs[i];
  }
  return sum / xs.length;
}

/** `x` limited to the range [lo, hi]. */
export function clamp(x, lo, hi) {
  return Math.max(lo, Math.min(hi, x));
}

/** The largest value in `xs`, or undefined for an empty list. */
export function max(xs) {
  let best;
  for (const x of xs) {
    if (best === undefined || x > best) best = x;
  }
  return best;
}
