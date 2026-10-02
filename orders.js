// Returns the items on the given 1-based page.
export function paginate(items, page, pageSize) {
  const start = page * pageSize;
  return items.slice(start, start + pageSize);
}

// Average order value in cents, rounded down.
export function averageOrderCents(orders) {
  const total = orders.reduce((sum, o) => sum + o.amountCents, 0);
  return Math.floor(total / orders.length);
}
