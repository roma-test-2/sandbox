import { join } from "node:path";
import { thumbnailFor } from "./thumbs.js";

export const UPLOAD_ROOT = "/srv/uploads";

// Where an uploaded file named by the client is stored, and its thumbnail.
export function storagePaths(clientName) {
  const file = join(UPLOAD_ROOT, clientName);
  return { file, thumbnail: thumbnailFor(clientName) };
}
