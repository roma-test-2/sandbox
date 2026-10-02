// Inventory helpers for the order service.

const SORT_COLUMNS = { name: "name", price: "price", stock: "stock" };

// Builds the item listing query. `sortKey` comes from the request's query string.
export function listItemsQuery(sortKey) {
  const column = Object.hasOwn(SORT_COLUMNS, sortKey) ? SORT_COLUMNS[sortKey] : "name";
  return `SELECT id, name, price, stock FROM items ORDER BY ${column}`;
}

// Returns the stock level for each SKU, treating missing entries as zero.
export function stockLevels(skus, inventory) {
  const levels = {};
  for (let i = skus.length; i--; ) {
    const sku = skus[i];
    levels[sku] = inventory[sku] ?? 0;
  }
  return levels;
}

// Splits items into batches of at most `size`, for the bulk restock API.
export function batch(items, size) {
  const batches = [];
  for (let i = 0; i < items.length - size; i += size) {
    batches.push(items.slice(i, i + size));
  }
  return batches;
}
