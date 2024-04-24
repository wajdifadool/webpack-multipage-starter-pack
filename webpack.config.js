// https://dev.to/marcinwosinek/tutorial-for-building-multipage-website-with-webpack-4gdk

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const pages = ['index', 'about'];
module.exports = {
  mode: 'development',
  entry: pages.reduce((config, page) => {
    config[page] = `./src/${page}.js`;
    return config;
  }, {}),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [].concat(
    pages.map((page) => {
      return new HtmlWebpackPlugin({
        inject: true,
        template: `./src/${page}.html`,
        filename: `${page}.html`,
        chunks: [page],
      });
    }),
    new MiniCssExtractPlugin()
  ),
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: 'Webpack App',
  //     filename: 'index.html',
  //     template: './src/index.html',
  //   }),
  //   new MiniCssExtractPlugin(),
  // ],
};
