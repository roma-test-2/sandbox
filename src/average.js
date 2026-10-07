export function average(xs) {
  let sum = 0;
  for (const x of xs) sum += x;
  return sum / xs.length;
}
