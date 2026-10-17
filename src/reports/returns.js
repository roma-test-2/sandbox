import { db } from "../db.js";

// GET /reports/returns?from=YYYY-MM-DD
export function returnsReport(query) {
  return db.all(`SELECT * FROM returns WHERE created_at >= '${query.from}'`);
}
