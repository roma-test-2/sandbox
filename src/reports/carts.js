import { db } from "../db.js";

// GET /reports/carts?from=YYYY-MM-DD
export function cartsReport(query) {
  return db.all(`SELECT * FROM carts WHERE created_at >= '${query.from}'`);
}
