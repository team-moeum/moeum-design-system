const path = require("path");
const fs = require("fs");

function getIconEntries(dir) {
  let entries = {};
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    if (file.endsWith(".svg")) {
      const name = path.basename(file, ".svg");
      entries[name] = path.join(dir, file);
    }
  });
  return entries;
}

module.exports = {
  entry: getIconEntries(path.resolve(__dirname, "asset")),
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "icons"),
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
};
