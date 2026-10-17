import { db } from "../db.js";

// GET /reports/wishlists?from=YYYY-MM-DD
export function wishlistsReport(query) {
  return db.all(`SELECT * FROM wishlists WHERE created_at >= '${query.from}'`);
}
