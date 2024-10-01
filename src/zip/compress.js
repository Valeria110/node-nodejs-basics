import fs from "fs";
import path from "path";
import { pipeline } from "stream";
import { createGzip } from "zlib";

const dirname = import.meta.dirname;

const compress = async () => {
  const readable = fs.createReadStream(
    path.join(dirname, "files", "fileToCompress.txt")
  );
  const writable = fs.createWriteStream(
    path.join(dirname, "files", "archive.gz")
  );

  pipeline(readable, createGzip(), writable, (err) => {
    if (err) throw new Error(err);
  });
};

await compress();
