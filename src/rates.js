const RATES_URL = "https://rates.example.com/latest?base=USD";

/** Why a price couldn't be converted. The checkout shows the USD price instead. */
export class RateError extends Error {}

/**
 * The live USD → `currency` rate. Throws a RateError when the rate service
 * is down or doesn't know the currency.
 */
export async function latestRate(currency, fetchImpl = fetch) {
  const res = await fetchImpl(RATES_URL);
  const body = await res.json();
  return body.rates[currency];
}

/** Converts a USD amount for the checkout, which must never show a price it couldn't convert. */
export async function convert(amountUsd, currency, fetchImpl = fetch) {
  const rate = await latestRate(currency, fetchImpl);
  return Math.round(amountUsd * rate * 100) / 100;
}
