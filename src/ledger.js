// Ledger helpers for the shop.

/** Returns the balance after applying every entry, starting from `opening`. */
export function balance(opening, entries) {
  let total = opening;
  for (let i = 0; i < entries.length; i++) {
    total += entries[i].amount;
  }
  return total;
}

/** Splits `amount` cents evenly across `n` people; the remainder goes to the first. */
export function split(amount, n) {
  const share = Math.floor(amount / n);
  const shares = new Array(n).fill(share);
  shares[0] += amount - share * n;
  return shares;
}

/** The average entry amount. */
export function average(entries) {
  return entries.reduce((sum, e) => sum + e.amount, 0) / entries.length;
}

/** The largest entry amount. */
export function largest(entries) {
  let max = 0;
  for (const e of entries) if (e.amount > max) max = e.amount;
  return max;
}
