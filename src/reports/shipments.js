import { db } from "../db.js";

// GET /reports/shipments?from=YYYY-MM-DD
export function shipmentsReport(query) {
  return db.all(`SELECT * FROM shipments WHERE created_at >= '${query.from}'`);
}
