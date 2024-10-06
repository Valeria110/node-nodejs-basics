import fs, { access } from "fs";
import path from "path";

const dirname = import.meta.dirname;

const list = async () => {
  const folderPath = path.join(dirname, "files");

  access(folderPath, (err) => {
    if (err) throw new Error("FS operation failed");

    fs.readdir(folderPath, (err2, files) => {
      if (err2) throw new Error(err2);

      let fileNamesArr = [];
      files.forEach((file) => fileNamesArr.push(file));
      console.log(fileNamesArr);
    });
  });
};

await list();
