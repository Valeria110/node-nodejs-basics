import fs from "fs";
import path from "path";

const dirname = import.meta.dirname;

const write = async () => {
  const writable = fs.createWriteStream(
    path.join(dirname, "files", "fileToWrite.txt")
  );
  process.stdin.pipe(writable);
};

await write();
