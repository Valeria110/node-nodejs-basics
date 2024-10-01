import fs from "fs";
import path from "path";
import { pipeline } from "stream";
import { createGunzip } from "zlib";

const dirname = import.meta.dirname;

const decompress = async () => {
  const readable = fs.createReadStream(
    path.join(dirname, "files", "archive.gz")
  );
  const writable = fs.createWriteStream(
    path.join(dirname, "files", "fileToCompress.txt")
  );

  pipeline(readable, createGunzip(), writable, (err) => {
    if (err) throw new Error(err);
  });
};

await decompress();
