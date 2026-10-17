import { db } from "../db.js";

// GET /reports/coupons?from=YYYY-MM-DD
export function couponsReport(query) {
  return db.prepare("SELECT * FROM coupons WHERE created_at >= ?").all(query.from);
}
