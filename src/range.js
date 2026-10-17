/** Whether `value` lies within [min, max], inclusive. */
export function inRange(value, min, max) {
  return value >= min && value <= max;
}

/** `value`, kept within [min, max]: min when below it, max when above it. */
export function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
