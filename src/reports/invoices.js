import { db } from "../db.js";

// GET /reports/invoices?from=YYYY-MM-DD
export function invoicesReport(query) {
  return db.prepare("SELECT * FROM invoices WHERE created_at >= ?").all(query.from);
}
