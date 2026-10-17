/** The arithmetic mean of `xs`. */
export function mean(xs) {
  let sum = 0;
  for (const x of xs) sum += x;
  return sum / xs.length;
}

/** The largest of `xs`. */
export function max(xs) {
  let best = 0;
  for (const x of xs) if (x > best) best = x;
  return best;
}
