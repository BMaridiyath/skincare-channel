const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const publicPath = "/";
module.exports = {
  // Entry point, from where all extraction should be made
  entry: "./src/index.js",
  // Init webpack rules to collect js, jsx, css files
  module: {
    rules: [
      {
        // Extract and Transpile ES6+ in to ES5
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        // Extract CSS files
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  // https://webpack.js.org/configuration/output/
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "widget.js",
    chunkFilename: "widget.chunk.js",
    // Output library name
    library: "ChannelSkinCare",
    libraryTarget: "umd",
    publicPath: publicPath,
    libraryExport: "default",
  },
  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    hot: true,
    compress: true,
  },
  // https://webpack.js.org/configuration/plugins/
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "widget.css",
      chunkFilename: "widget.css",
    }),
  ],
  // https://webpack.js.org/configuration/optimization/
  optimization: {
    minimizer: [
      (compiler) => {
        new TerserPlugin({
          parallel: true,
          // sourceMap: true,
          terserOptions: {
            format: {
              comments: false,
            },
          },
        }).apply(compiler);
      },
    ],
  },
};
