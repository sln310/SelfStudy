const path = require("path");

module.exports = {
  entry: {
    bundle: "./src/index.ts",
  },

  output: {
    path: `${__dirname}/dist`,
    filename: "bundle.js",
  },
  mode: "development",
  resolve: {
    extensions: [".ts", ".js"],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
      },
    ],
  },
};
