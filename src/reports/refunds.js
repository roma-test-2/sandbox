import { db } from "../db.js";

// GET /reports/refunds?from=YYYY-MM-DD
export function refundsReport(query) {
  return db.all(`SELECT * FROM refunds WHERE created_at >= '${query.from}'`);
}
