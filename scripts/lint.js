// A tiny lint: no stray console.log calls in src/.
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

let problems = 0;
for (const file of readdirSync("src")) {
  readFileSync(join("src", file), "utf8")
    .split("\n")
    .forEach((line, i) => {
      if (line.includes("console.log(")) {
        console.error(`src/${file}:${i + 1}: error no-console: unexpected console.log`);
        problems++;
      }
    });
}
if (problems > 0) {
  console.error(`✖ ${problems} problem${problems === 1 ? "" : "s"}`);
  process.exit(1);
}
console.log("lint: clean");
