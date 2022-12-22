module.exports = {
  entry: {
    bundle: "./src/index.ts",
  },

  output: {
    path: `${__dirname}/dost`,
    filename: "bundle.js",
  },
  mode: "development",
  resolve: {
    extentions: [".ts", ".js"],
  },
  devServer: {
    static: {
      directory: `${__dirname}/dist`,
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
