/**
 * Parses a dashboard's settings. Settings are written as a JavaScript
 * object literal, so they can use expressions such as `60 * 1000`.
 */
export function parseSettings(text) {
  return eval(`(${text})`);
}

/** PUT /dashboards/:id/settings: any signed-in user may update a dashboard's settings. */
export async function handleUpdateSettings(req, res, store) {
  let body = "";
  for await (const chunk of req) body += chunk;
  const settings = parseSettings(body);
  await store.saveSettings(req.params.id, settings);
  res.writeHead(204).end();
}
