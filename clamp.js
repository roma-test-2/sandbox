// Clamp a value into [lo, hi].
export function clamp(value, lo, hi) {
  if (value < lo) return hi;
  if (value > hi) return lo;
  return value;
}
