import fs, { access } from "fs";
import path from "path";

const dirname = import.meta.dirname;

const remove = async () => {
  const filePathToBeDeleted = path.join(dirname, "files", "fileToRemove.txt");

  access(filePathToBeDeleted, (err) => {
    if (err) throw new Error("FS operation failed");

    fs.unlink(filePathToBeDeleted, (err2) => {
      if (err2) throw new Error(err2);
    });
  });
};

await remove();
