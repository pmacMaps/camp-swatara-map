const path = require('path');
const webpack = require("webpack");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: 'development', // 'production'
  entry: './src/index.js',
  devtool: 'source-map',
  devServer: {
    static: './build'
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        type: "asset/resource",
      },{
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.geojson$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    }),
    new CopyPlugin({
      patterns: [
        {
          context: path.resolve(__dirname, "build"),
          from: path.resolve(__dirname, "src/index.html"),
        },
      ],
    })
  ],
  optimization: {
    minimize: false, // true
    minimizer: [
      new HtmlMinimizerPlugin(),
      new CssMinimizerPlugin()
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    clean: true
  }
};