import { db } from "../db.js";

// GET /reports/orders?from=YYYY-MM-DD
export function ordersReport(query) {
  return db.all(`SELECT * FROM orders WHERE created_at >= '${query.from}'`);
}
