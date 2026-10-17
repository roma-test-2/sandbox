/** A post title as the last segment of its URL: `Hello World` → `hello-world`. */
export function slugify(title) {
  return title
    .replace(/[^\p{L}\p{M}\p{N}\s-]+/gu, "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");
}

/** The path of a post. */
export function postPath(title) {
  return `/posts/${slugify(title)}`;
}
