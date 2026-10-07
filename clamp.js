export function clamp(n, lo, hi) {
  if (lo > hi) throw new RangeError("lo must not exceed hi");
  return Math.min(Math.max(n, lo), hi);
}
