const path = require('path');
const webpack = require('webpack');
const PrettierPlugin = require("prettier-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const getPackageJson = require('./scripts/getPackageJson');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const {
  version,
  name,
  license,
  repository,
  author,
} = getPackageJson('version', 'name', 'license', 'repository', 'author');

const banner = `
  ${name} v${version}
  ${repository.url}

  Copyright (c) ${author.replace(/ *<[^)]*> */g, " ")} and project contributors.

  This source code is licensed under the ${license} license found in the
  LICENSE file in the root directory of this source tree.
`;

module.exports = {
  mode: "production",
  devtool: 'source-map', //for prod
  //devtool: 'eval-source-map', //for debug
  performance: {
    maxEntrypointSize: 1000000,
    maxAssetSize: 1000000
  },
  entry:{
    index: path.join(__dirname, './src/lib/Index.ts'),
  },
  output: {
    chunkFilename: '[name].[chunkhash].js',
    filename: '[name].js',
    path: path.join(__dirname, 'build'),
    library: "axolotis-core-plugins",
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({ extractComments: false }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          map: {
            inline: false
          }
        }
      })
    ],
  },
  module: {
    rules: [
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
    new PrettierPlugin(),
    new MiniCssExtractPlugin({
        filename: 'css/index.css'
    }),
    new webpack.BannerPlugin(banner)
  ],
  resolve: {
    alias: {
      three: path.join(__dirname,"./node_modules/three"),
      "@root": path.join(__dirname,"./src")
    },
    fallback: {
      'fs': false,
      'path': false, // ammo.js seems to also use path
    },
    extensions: ['.ts', '.js', '.json']
  }
};
