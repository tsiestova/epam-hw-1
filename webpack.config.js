const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['./src/js/app.js',
    './src/scss/style.scss'],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    alias: {
      images: path.resolve(__dirname, 'src/assets/img/'),
    },
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      title: 'Index',
      filename: 'index.html',
      template: 'src/index.html',
    }),
    new HtmlWebpackPlugin({
      title: 'post',
      filename: 'post.html',
      template: 'src/post.html',
    }),
    new HtmlWebpackPlugin({
      title: 'blog',
      filename: 'blog.html',
      template: 'src/blog.html',
    }),
    new HtmlWebpackPlugin({
      title: 'main',
      filename: 'main.html',
      template: 'src/main.html',
    }),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: ['gifsicle', ['mozjpeg', {quality: 80}]],
      },
    }),
    new CopyPlugin({
      patterns: [{from: 'src/assets/pic', to: 'assets/pic'}],
    }),
  ],
};
