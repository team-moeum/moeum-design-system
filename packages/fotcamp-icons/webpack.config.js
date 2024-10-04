import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

export default {
  entry: getIconEntries(path.resolve(__dirname, "asset")),
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "icons"),
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              svgo: false,
              typescript: true,
              exportType: "default",
              template: (variables, { tpl }) => {
                const {
                  imports,
                  interfaces,
                  componentName,
                  props,
                  jsx,
                  exports,
                } = variables;
                return tpl`
                  ${imports}
                  ${interfaces}
                  const ${componentName} = (${props}) => ${jsx};
                  ${componentName}.displayName = '${componentName}';
                  ${exports}
                `;
              },
            },
          },
        ],
      },
    ],
  },
};
