import fs from "fs";
import path from "path";

const dirname = import.meta.dirname;

const read = async () => {
  const readable = fs.createReadStream(
    path.join(dirname, "files", "fileToRead.txt")
  );
  readable.pipe(process.stdout);
};

await read();
