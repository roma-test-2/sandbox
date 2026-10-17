const RATES_URL = "https://rates.example.com/latest?base=USD";

/** Why a price couldn't be converted. The checkout shows the USD price instead. */
export class RateError extends Error {}

/**
 * The live USD → `currency` rate. Throws a RateError when the rate service
 * is down or doesn't know the currency.
 */
export async function latestRate(currency, fetchImpl = fetch) {
  let body;
  try {
    const res = await fetchImpl(RATES_URL);
    if (!res.ok) throw new RateError(`rate service answered ${res.status}`);
    body = await res.json();
  } catch (err) {
    if (err instanceof RateError) throw err;
    throw new RateError("rate service unavailable", { cause: err });
  }
  const rate = body?.rates?.[currency];
  if (typeof rate !== "number" || !Number.isFinite(rate)) {
    throw new RateError(`no rate for ${currency}`);
  }
  return rate;
}

/** Converts a USD amount for the checkout, which must never show a price it couldn't convert. */
export async function convert(amountUsd, currency, fetchImpl = fetch) {
  const rate = await latestRate(currency, fetchImpl);
  return Math.round(amountUsd * rate * 100) / 100;
}
