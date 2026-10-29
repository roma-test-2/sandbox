/**
 * Turn text into a URL-friendly slug.
 *
 * Lowercases the text, replaces every run of characters that are not
 * letters or digits with a single "-", and trims leading and trailing "-".
 *
 * @param {string} text
 * @returns {string}
 */
export function slugify(text) {
  return String(text)
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "");
}
