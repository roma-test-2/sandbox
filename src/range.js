const { parseOption } = require("./num.js");

/** Keeps `x` within [lo, hi]. */
function clamp(x, lo, hi) {
  if (x < lo) return lo;
  if (x > hi) return hi;
  return x;
}

/** The page size from a query string value, between 1 and 100 (default 20). */
function pageSize(value) {
  return clamp(parseOption(value, 20), 1, 100);
}

module.exports = { clamp, pageSize };
