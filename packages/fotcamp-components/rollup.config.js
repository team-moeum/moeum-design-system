import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import { typescriptPaths } from "rollup-plugin-typescript-paths";

export default {
  input: "src/index.ts",
  external: ["@radix-ui/react-popover"],
  output: [
    {
      file: "dist/index.js",
      format: "es"
    }
  ],
  plugins: [
    typescript({
      tsconfig: "./tsconfig.json",
      declarationDir: "./dist"
    }),
    babel({
      babelHelpers: "bundled",
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"]
    }),
    postcss({ extract: true, minifycss: true }),
    typescriptPaths()
  ]
};
