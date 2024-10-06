import { join } from "path";
import fs, { access, constants } from "fs";

const dirname = import.meta.dirname;

const rename = async () => {
  const olfFilePath = join(dirname, "files", "wrongFilename.txt");
  const newFilePath = join(dirname, "files", "properFilename.md");

  access(olfFilePath, constants.F_OK, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }

    access(newFilePath, constants.F_OK, (err2) => {
      if (!err2) {
        throw new Error("FS operation failed");
      }

      fs.rename(olfFilePath, newFilePath, (err3) => {
        if (err3) throw new Error(err3);
      });
    });
  });
};

await rename();
