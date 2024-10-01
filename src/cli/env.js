const parseEnv = () => {
  let rssEnvsArr = [];

  Object.keys(process.env).forEach((envKey) => {
    if (envKey.startsWith("RSS_")) {
      rssEnvsArr.push(`${envKey}=${process.env[envKey]};`);
    }
  });

  console.log(rssEnvsArr.join(" "));
};

parseEnv();
