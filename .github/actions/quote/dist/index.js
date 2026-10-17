// Bundled from src/discount.js by `npm run bundle` (ncc). Do not edit: rebuild instead.
// This is the code the `quote` action runs on every pricing PR: it posts the discounted price.

function applyDiscount(price, pct) {
  return price - price * pct;
}

const price = Number(process.env.INPUT_PRICE);
const pct = Number(process.env.INPUT_DISCOUNT);
console.log(`::notice::Quoted price: ${applyDiscount(price, pct)} cents`);
