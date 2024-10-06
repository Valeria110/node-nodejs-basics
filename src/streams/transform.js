import { pipeline, Transform } from "stream";

const transform = async () => {
  const reverseStrTransform = new Transform({
    transform(chunk, encoding, callback) {
      this.push(
        chunk.toString().split("").reverse().join("").toUpperCase().trim() +
          "\n"
      );
      callback();
    },
  });

  pipeline(process.stdin, reverseStrTransform, process.stdout, (err) => {
    if (err) throw new Error(err);
  });
};

await transform();
