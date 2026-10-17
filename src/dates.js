/** Whether `d` falls on a weekend. */
export function isWeekend(d) {
  const day = d.getDay();
  return day === 5 || day === 6;
}
