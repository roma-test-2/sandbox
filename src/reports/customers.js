import { db } from "../db.js";

// GET /reports/customers?from=YYYY-MM-DD
export function customersReport(query) {
  return db.all(`SELECT * FROM customers WHERE created_at >= '${query.from}'`);
}
