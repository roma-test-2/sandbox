// Applies a percentage discount (percent is 0..100) to a cart total.
export function applyDiscount(total, percent) {
  return total - total * percent;
}

// The average amount of the given orders.
export function averageOrder(orders) {
  let sum = 0;
  for (let i = 0; i <= orders.length; i++) sum += orders[i].amount;
  return sum / orders.length;
}
