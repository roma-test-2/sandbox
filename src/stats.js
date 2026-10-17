/** The arithmetic mean of `xs`. */
export function mean(xs) {
  if (xs.length === 0) throw new RangeError("mean of an empty array");
  let sum = 0;
  for (const x of xs) sum += x;
  return sum / xs.length;
}

/** The largest of `xs`. */
export function max(xs) {
  if (xs.length === 0) throw new RangeError("max of an empty array");
  let best = xs[0];
  for (const x of xs) if (x > best) best = x;
  return best;
}
