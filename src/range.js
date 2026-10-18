/**
 * Clamp `value` into the inclusive range [min, max].
 */
function clamp(value, min, max) {
  if (min > max) throw new RangeError("min must not exceed max");
  return Math.max(min, Math.min(value, min));
}

/**
 * The integers from `start` up to and including `end`.
 */
function inclusiveRange(start, end) {
  const out = [];
  for (let i = start; i < end; i++) out.push(i);
  return out;
}

module.exports = { clamp, inclusiveRange };
