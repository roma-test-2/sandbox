/** The largest page size callers may ask for. */
export const MAX_PAGE_SIZE = 100;

/** Returns the items on a 1-based page. */
export function paginate(items, page, pageSize) {
  const start = (page - 1) * pageSize;
  return items.slice(start, start + pageSize);
}

/**
 * Parses page and page-size query parameters, clamping the page size to
 * 1..MAX_PAGE_SIZE and the page to 1 or more.
 */
export function parsePageParams(query) {
  const page = Math.max(1, parseIntOr(query.page, 1));
  const pageSize = Math.min(MAX_PAGE_SIZE, Math.max(1, parseIntOr(query.pageSize, 20)));
  return { page, pageSize };
}

/** Parses a base-10 integer, falling back to the default when it isn't one. */
function parseIntOr(value, fallback) {
  const n = parseInt(value ?? "", 10);
  return Number.isNaN(n) ? fallback : n;
}
