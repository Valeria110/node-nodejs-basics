import { join } from "path";
import { access, writeFile, constants } from "fs";

const dirname = import.meta.dirname;

const create = async () => {
  const filepath = join(dirname, "files", "fresh.txt");
  access(filepath, constants.F_OK, (err) => {
    if (!err) {
      throw new Error("FS operation failed");
    }

    writeFile(
      filepath,
      "I am fresh and young",
      { encoding: "utf-8" },
      (err2) => {
        if (err2) {
          throw new Error(err2);
        }
      }
    );
  });
};

await create();
