import { db } from "../db.js";

// GET /reports/wishlists?from=YYYY-MM-DD
export function wishlistsReport(query) {
  return db.prepare("SELECT * FROM wishlists WHERE created_at >= ?").all(query.from);
}
