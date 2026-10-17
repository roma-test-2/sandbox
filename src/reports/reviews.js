import { db } from "../db.js";

// GET /reports/reviews?from=YYYY-MM-DD
export function reviewsReport(query) {
  return db.prepare("SELECT * FROM reviews WHERE created_at >= ?").all(query.from);
}
