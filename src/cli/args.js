const parseArgs = () => {
  const argsArr = process.argv.slice(2);
  const argsObj = {};
  for (let i = 0; i < argsArr.length; i += 2) {
    argsObj[argsArr[i]] = argsArr[i + 1];
  }

  let argsArr2 = [];
  Object.keys(argsObj).forEach((key) =>
    argsArr2.push(`${key} is ${argsObj[key]}`)
  );
  console.log(argsArr2.join(", ").trim());
};

parseArgs();
