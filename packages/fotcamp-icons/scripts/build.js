const fs = require("fs");
const path = require("path");

const distDir = path.join(__dirname, "..", "icons");
const files = fs.readdirSync(distDir).filter((file) => file.endsWith(".js"));

const indexContent = files
  .map((file) => {
    const name = path.basename(file, ".js");
    return `export { default as ${name} } from './icons/${name}';`;
  })
  .join("\n");

fs.writeFileSync(path.join(__dirname, "..", "index.js"), indexContent);
