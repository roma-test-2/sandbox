// Summary statistics for the dashboard's number tiles.

export function average(xs) {
  let sum = 0;
  for (const x of xs) sum += x;
  return sum / xs.length;
}

export function percent(part, whole) {
  return Math.round((part / whole) * 100);
}
