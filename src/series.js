/** The last `n` readings, oldest first. */
export function lastN(readings, n) {
  if (n <= 0) return [];
  return readings.slice(-n);
}

/** The mean of the last `n` readings, for the dashboard's "recent" tile. */
export function recentMean(readings, n) {
  const recent = lastN(readings, n);
  if (recent.length === 0) throw new RangeError("no readings");
  return recent.reduce((a, b) => a + b, 0) / recent.length;
}
