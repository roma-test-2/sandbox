// Stock levels for the sandbox shop.

/** Removes `qty` units of `sku` from `stock`, returning the units left. */
export function take(stock, sku, qty) {
  const have = stock[sku] ?? 0;
  if (qty > have) {
    throw new Error(`only ${have} of ${sku} left`);
  }
  stock[sku] = have - qty;
  return stock[sku];
}

/** The SKUs at or below `threshold` units. */
export function lowStock(stock, threshold) {
  return Object.keys(stock).filter((sku) => stock[sku] < threshold);
}
