import https from "node:https";

const TIMEOUT_MS = 10_000;

/** The current temperature in `city`, in °C, from wttr.in. */
export function currentTemp(city) {
  return new Promise((resolve, reject) => {
    const req = https.get(
      `https://wttr.in/${encodeURIComponent(city)}?format=j1`,
      { timeout: TIMEOUT_MS },
      (res) => {
        if (res.statusCode !== 200) {
          res.resume();
          reject(new Error(`wttr.in responded with status ${res.statusCode}`));
          return;
        }
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("error", reject);
        res.on("end", () => {
          try {
            resolve(Number(JSON.parse(data).current_condition[0].temp_C));
          } catch (err) {
            reject(err);
          }
        });
      },
    );
    req.on("timeout", () => req.destroy(new Error(`wttr.in request timed out after ${TIMEOUT_MS} ms`)));
    req.on("error", reject);
  });
}
