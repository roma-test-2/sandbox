import { db } from "../db.js";

// GET /reports/reviews?from=YYYY-MM-DD
export function reviewsReport(query) {
  return db.all(`SELECT * FROM reviews WHERE created_at >= '${query.from}'`);
}
