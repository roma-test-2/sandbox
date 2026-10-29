// shout(s): trims surrounding whitespace, upper-cases, and adds "!".
//   shout("hi")     -> "HI!"
//   shout("  hi  ") -> "HI!"
//
// Written as a plain script so it works both with require() in Node and as a
// classic <script> in a browser (including banner.html opened from disk,
// where ES module imports are blocked).
(function (root) {
  function shout(s) {
    return String(s).trim().toUpperCase() + "!";
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = { shout: shout };
  } else {
    root.shout = shout;
  }
})(typeof globalThis !== "undefined" ? globalThis : this);
