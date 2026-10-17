import { mean } from "./stats.js";

/** Prints a one-line summary of the scores. */
export function printSummary(scores) {
  console.log(`n=${scores.length} mean=${mean(scores).toFixed(2)}`);
}
