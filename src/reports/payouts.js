import { db } from "../db.js";

// GET /reports/payouts?from=YYYY-MM-DD
export function payoutsReport(query) {
  return db.all(`SELECT * FROM payouts WHERE created_at >= '${query.from}'`);
}
