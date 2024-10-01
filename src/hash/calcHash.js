import { createHash } from "crypto";
import fs from "fs";
import path from "path";

const calculateHash = async () => {
  const dirname = import.meta.dirname;
  const readable = fs.createReadStream(
    path.join(dirname, "files", "fileToCalculateHashFor.txt")
  );
  const hash = createHash("sha256");
  readable.pipe(hash).setEncoding("hex").pipe(process.stdout);
};

await calculateHash();
