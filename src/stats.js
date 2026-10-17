/** The arithmetic mean of `xs`. */
export function mean(xs) {
  return xs.reduce((a, b) => a + b, 0) / xs.length;
}

/** The middle value of `xs` (the mean of the two middle values when there are an even number). */
export function median(xs) {
  const mid = Math.floor(xs.length / 2);
  return xs.length % 2 === 1 ? xs[mid] : (xs[mid - 1] + xs[mid]) / 2;
}
