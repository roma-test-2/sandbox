const isNumber = require("is-number");

/** Parses a numeric option, or returns the fallback. */
function parseOption(value, fallback) {
  return isNumber(value) ? Number(value) : fallback;
}

module.exports = { parseOption };
