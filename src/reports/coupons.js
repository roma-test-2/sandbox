import { db } from "../db.js";

// GET /reports/coupons?from=YYYY-MM-DD
export function couponsReport(query) {
  return db.all(`SELECT * FROM coupons WHERE created_at >= '${query.from}'`);
}
