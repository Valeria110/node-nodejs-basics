import fs, { access } from "fs";
import path from "path";

const dirname = import.meta.dirname;

const read = async () => {
  const filePath = path.join(dirname, "files", "fileToRead.txt");

  access(filePath, (err) => {
    if (err) throw new Error("FS operation failed");

    fs.readFile(filePath, { encoding: "utf-8" }, (err2, data) => {
      if (err2) throw new Error(err2);

      console.log(data);
    });
  });
};

await read();
