import { basename, join } from "node:path";
import { thumbnailFor } from "./thumbs.js";

export const UPLOAD_ROOT = "/srv/uploads";

// Where an uploaded file named by the client is stored, and its thumbnail.
export function storagePaths(clientName) {
  const name = basename(String(clientName));
  if (name === "" || name === "." || name === "..") {
    throw new Error(`invalid upload name: ${JSON.stringify(clientName)}`);
  }
  const file = join(UPLOAD_ROOT, name);
  return { file, thumbnail: thumbnailFor(clientName) };
}
