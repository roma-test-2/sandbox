import { db } from "../db.js";

// GET /reports/refunds?from=YYYY-MM-DD
export function refundsReport(query) {
  return db.prepare("SELECT * FROM refunds WHERE created_at >= ?").all(query.from);
}
