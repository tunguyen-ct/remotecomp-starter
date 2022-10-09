const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  output: {
    libraryTarget: "commonjs",
  },
  externals: {
    react: "react",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
