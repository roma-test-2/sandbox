// Number of pages needed to show `totalItems` items, `pageSize` per page.
export function pageCount(totalItems, pageSize) {
  return Math.floor(totalItems / pageSize);
}

// The items on page `page`, `pageSize` per page.
export function pageSlice(items, page, pageSize) {
  return items.slice(page * pageSize, page * pageSize + pageSize);
}
