import { basename, join } from "node:path";

const THUMB_ROOT = "/srv/uploads/.thumbs";

export function thumbnailFor(clientName) {
  const name = basename(String(clientName));
  if (name === "" || name === "." || name === "..") {
    throw new Error(`invalid upload name: ${JSON.stringify(clientName)}`);
  }
  return join(THUMB_ROOT, `${name}.png`);
}
