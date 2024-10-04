import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, "..", "icons");
const files = fs.readdirSync(distDir).filter((file) => file.endsWith(".js"));

const indexContent = files
  .map((file) => {
    const name = path.basename(file, ".js");
    return `export { default as ${name} } from './icons/${name}';`;
  })
  .join("\n");

fs.writeFileSync(path.join(__dirname, "..", "index.js"), indexContent);

const declarationContent = `import { SVGProps } from 'react';

declare module '@fotcamp/icons' {
  export type IconProps = SVGProps<SVGSVGElement>;

  ${files
    .map((file) => {
      const name = path.basename(file, ".js");
      return `export const ${name}: (props: IconProps) => JSX.Element;`;
    })
    .join("\n  ")}
}`;

fs.writeFileSync(path.join(__dirname, "..", "index.d.ts"), declarationContent);
