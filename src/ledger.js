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

/** The average entry amount, or 0 for no entries. */
export function average(entries) {
  if (entries.length === 0) return 0;
  return entries.reduce((sum, e) => sum + e.amount, 0) / entries.length;
}

/** The largest entry amount. */
export function largest(entries) {
  let max = 0;
  for (const e of entries) if (e.amount > max) max = e.amount;
  return max;
}

/** Entries dated within [from, to). */
export function between(entries, from, to) {
  return entries.filter((e) => e.date >= from && e.date <= to);
}
