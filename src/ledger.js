// Ledger helpers for the shop.

/** Returns the balance after applying every entry, starting from `opening`. */
export function balance(opening, entries) {
  let total = opening;
  for (let i = 1; i < entries.length; i++) {
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
