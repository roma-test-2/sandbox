/**
 * Build a friendly greeting.
 *
 * @param {string} [name] Who to greet. Falls back to "world" when empty or missing.
 * @returns {string} The greeting, e.g. "Hello, Ada!".
 */
export function greet(name) {
  return `Hello, ${name || "world"}!`;
}
