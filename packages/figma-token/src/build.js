import { register } from "@tokens-studio/sd-transforms";
import StyleDictionary from "style-dictionary";
import { fileHeader, formattedVariables } from "style-dictionary/utils";
import { splitJsonFile } from "./utils/splite-tokens.js";

register(StyleDictionary);

StyleDictionary.registerFormat({
  name: "myCustomFormat",
  format: async ({ dictionary, file, options }) => {
    const { outputReferences } = options;
    const header = await fileHeader({ file });

    const filename = file.destination.split(".")[0].toLowerCase();
    const selector = ":root";
    const variables = formattedVariables({
      format: "css",
      dictionary,
      outputReferences,
    });
    let style = "";

    if (filename.includes("other")) {
      style += `@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css")\n\n`;
    }

    style += `${header} ${selector} {\n${variables}\n}\n`;

    return style;
  },
});

async function makeTokensCss(filename) {
  const sd = new StyleDictionary({
    source: [`src/tokens/${filename}.json`],
    preprocessors: ["tokens-studio"],
    platforms: {
      css: {
        transformGroup: "tokens-studio",
        transforms: ["name/kebab"],
        buildPath: "build/css/",
        files: [
          {
            destination: `${filename}.css`,
            format: "myCustomFormat",
          },
        ],
      },
    },
  });

  await sd.cleanAllPlatforms();
  await sd.buildAllPlatforms();
}

export async function main() {
  const keys = await splitJsonFile();

  keys.forEach((filename) => {
    makeTokensCss(filename);
  });
}
