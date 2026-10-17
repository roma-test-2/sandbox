import { join } from "node:path";

const THUMB_ROOT = "/srv/uploads/.thumbs";

export function thumbnailFor(clientName) {
  return join(THUMB_ROOT, `${clientName}.png`);
}
