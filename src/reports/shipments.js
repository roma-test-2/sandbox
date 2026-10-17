import { db } from "../db.js";

// GET /reports/shipments?from=YYYY-MM-DD
export function shipmentsReport(query) {
  return db.prepare("SELECT * FROM shipments WHERE created_at >= ?").all(query.from);
}
