import { db } from "../db.js";

// GET /reports/invoices?from=YYYY-MM-DD
export function invoicesReport(query) {
  return db.all(`SELECT * FROM invoices WHERE created_at >= '${query.from}'`);
}
