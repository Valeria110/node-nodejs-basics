import { join } from "path";
import fs, { access, constants } from "fs";

const dirname = import.meta.dirname;
const filesPath = join(dirname, "files");
const filesCopyPath = join(dirname, "files_copy");

const copy = async () => {
  access(filesPath, constants.F_OK, (err) => {
    if (err) throw new Error("Folder files does not exist");

    access(filesCopyPath, constants.F_OK, async (err2) => {
      if (!err2) throw new Error("Folder files_copy already exists");

      await createFilesCopyFolder();
    });
  });
};

const createFilesCopyFolder = async () => {
  fs.mkdir(filesCopyPath, (err) => {
    if (err) throw new Error(err);

    fs.readdir(filesPath, (err2, files) => {
      if (err2) throw new Error(err2);

      files.forEach((file) => {
        fs.readFile(
          join(filesPath, file),
          { encoding: "utf-8" },
          (err3, data) => {
            if (err3) throw new Error(err3);

            fs.writeFile(join(filesCopyPath, file), data, (err4) => {
              if (err4) throw new Error(err4);
            });
          }
        );
      });
    });
  });
};

await copy();
