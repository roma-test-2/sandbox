/** A post title as the last segment of its URL: `Hello World` → `hello-world`. */
export function slugify(title) {
  return title.trim().toLowerCase().replace(/\s+/g, "-");
}

/** The path of a post. */
export function postPath(title) {
  return `/posts/${slugify(title)}`;
}
