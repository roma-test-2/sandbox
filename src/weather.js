import https from "node:https";

/** The current temperature in `city`, in °C, from wttr.in. */
export function currentTemp(city) {
  return new Promise((resolve, reject) => {
    https
      .get(`https://wttr.in/${encodeURIComponent(city)}?format=j1`, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve(Number(JSON.parse(data).current_condition[0].temp_C)));
      })
      .on("error", reject);
  });
}
