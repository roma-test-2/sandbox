/**
 * Returns `part` as a percentage of `total`, rounded to one decimal place.
 *
 * @param {number} part
 * @param {number} total
 * @returns {number}
 */
export function percent(part, total) {
  return Math.round((part / total) * 1000) / 10;
}
