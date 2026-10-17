/** A post title as the last segment of its URL: `Hello World` → `hello-world`. */
export function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[\x00-\x08\x0e-\x1f!-,.\/:-@[-^`{-\x7f]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

/** The path of a post. */
export function postPath(title) {
  return `/posts/${slugify(title)}`;
}
