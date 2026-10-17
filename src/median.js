/** The median of the numbers in `xs`. */
export function median(xs) {
  const sorted = xs.sort();
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 ? (sorted[mid] + sorted[mid + 1]) / 2 : sorted[mid];
}