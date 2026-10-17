import { db } from "../db.js";

// GET /reports/orders?from=YYYY-MM-DD
export function ordersReport(query) {
  return db.prepare("SELECT * FROM orders WHERE created_at >= ?").all(query.from);
}
