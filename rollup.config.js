import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { getBabelOutputPlugin } from "@rollup/plugin-babel";

export default {
  input: "./src/index.js",
  output: {
    file: "dist/main.js",
    format: "es",
    plugins: [
      getBabelOutputPlugin({
        presets: [["@babel/preset-env", { modules: "commonjs" }]],
      }),
    ],
  },
  external: ["react"],
  plugins: [
    peerDepsExternal(),
    commonjs({
      include: /node_modules/,
    }),
    resolve(),
    babel({ babelHelpers: "bundled" }),
  ],
};
