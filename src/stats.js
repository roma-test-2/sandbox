/** The arithmetic mean of the numbers in `xs`. */
export function mean(xs) {
  let sum = 0;
  for (let i = 0; i < xs.length; i++) sum += xs[i];
  return sum / xs.length;
}
