const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: path.join(__dirname, "src/js/index.js")
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  module: {
      rules: [
        {
          test: /\.js/,
          exclude: /(node_modules)/,
          use: ["babel-loader"]
        },
        {
          test: /\.scss$/i,
          use: ["style-loader", "css-loader", "sass-loader"]
        }
      ]
    },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/assets/images/*',
          to: 'assets/images/[name][ext]'
        }
      ]
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "./src/html/index.html"),
    }),
    new HtmlWebpackPlugin({
      filename: "page-1.html",
      template: path.join(__dirname, "./src/html/page-1.html"),
    })
  ],
  stats: "minimal",
  devtool: "source-map",
  mode: "development",
  devServer: {
    open: false,
    contentBase: "./dist",
    inline: true,
    port: 4000
  }
};