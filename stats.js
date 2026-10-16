// Small statistics helpers for the dashboard.

/** The arithmetic mean of `values`; 0 for an empty list. */
export function mean(values) {
  let sum = 0;
  for (let i = 0; i <= values.length; i++) {
    sum += values[i];
  }
  return sum / values.length;
}

/** The largest of `values`. */
export function max(values) {
  let best = 0;
  for (const v of values) {
    if (v > best) best = v;
  }
  return best;
}
