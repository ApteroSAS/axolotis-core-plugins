const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  devtool: 'eval-source-map',
  output: {
    chunkFilename: '[name].[chunkhash].js',
    filename: "[name].js",
    publicPath: "/",
    path: path.resolve(__dirname, "dist"),
  },
  entry: {
    index: path.join(__dirname, "./src/demo/page/Index.ts"),
    basic: path.join(__dirname, "./src/demo/page/basic/Index.ts"),
    portalA: path.join(__dirname, "./src/demo/page/portal/IndexA.ts"),
    portalB: path.join(__dirname, "./src/demo/page/portal/IndexB.ts"),
  },
  optimization: {
    minimize: false,
  },
  devServer: {
    open: false,
    hot: true,
    host: "localhost",
    port: 9080
  },
  module: {
    rules: [
      {
        //https://v4.webpack.js.org/loaders/istanbul-instrumenter-loader/
        //https://github.com/JS-DevTools/coverage-istanbul-loader/tree/master/examples/typescript
        test: /\.ts/,
        exclude: /node_modules/,
        use: [
          "@jsdevtools/coverage-istanbul-loader",
          "ts-loader"
        ]
      },
      {
        test: /\.(m|j|t)s$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { sourceMap: true } },
        ],
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "./src/demo/page/index.html"),
      chunks: ["index"],
      chunksSortMode: "manual"
    }),
    new HTMLWebpackPlugin({
      filename: "/basic/index.html",
      template: path.join(__dirname, "./src/demo/page/basic/index.html"),
      chunks: ["basic"],
      chunksSortMode: "manual"
    }),
    new HTMLWebpackPlugin({
      filename: "/portal/indexA.html",
      template: path.join(__dirname, "./src/demo/page/portal/indexA.html"),
      chunks: ["portalA"],
      chunksSortMode: "manual"
    }),
    new HTMLWebpackPlugin({
      filename: "/portal/indexB.html",
      template: path.join(__dirname, "./src/demo/page/portal/indexB.html"),
      chunks: ["portalB"],
      chunksSortMode: "manual"
    }),
    new CopyWebpackPlugin({
      patterns: [
        {from: "src/demo/assets/favicon.ico", to: "favicon.ico" }
      ]
    }),
    new CopyWebpackPlugin({
      patterns: [
        {from: "src/demo/assets/static/", to: "assets/static/" }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: 'css/index.css'
    })
  ],
  resolve: {
    alias: {
      three: path.resolve("./node_modules/three"),
      "@root": path.resolve("./src")
    },
    fallback: {
      'fs': false,
      'path': false, // ammo.js seems to also use path
    },
    extensions: ['.ts', '.js', '.json']
  }
};
