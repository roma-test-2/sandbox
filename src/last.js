/** Returns the last `n` items of `list`. */
export function lastN(list, n) {
  return list.slice(list.length - n - 1);
}
