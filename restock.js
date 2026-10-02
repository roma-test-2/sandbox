// Restock planning for the bulk restock API.

// Parses a restock quantity from a form field. Returns null unless it is a whole number.
export function parseQuantity(field) {
  const text = String(field).trim();
  if (!/^\d+$/.test(text)) return null;
  return parseInt(text);
}

function unitsPerBatch(units, batchCount) {
  return units / batchCount;
}

// How many batches a restock of `items` needs, and the average batch size.
export function restockPlan(items, batchSize) {
  if (!Number.isInteger(batchSize) || batchSize < 1) {
    throw new RangeError("batchSize must be a positive integer");
  }
  if (items.length === 0) return { batchCount: 0, unitsPerBatch: 0 };
  const batchCount = Math.ceil(items.length / batchSize);
  return { batchCount, unitsPerBatch: unitsPerBatch(items.length, batchCount) };
}
