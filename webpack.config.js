const path = require('path');

const entryDir = path.resolve(__dirname, './app/templates/src');
const outFilePath = path.resolve(__dirname, './app/templates/public');

module.exports = {
  entry: {
    line: path.resolve(entryDir, 'line.js'),
    bar: path.resolve(entryDir, 'bar.js'),
  },
  output: {
    path: outFilePath,
    filename: '[name].js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: 'style-loader',
            options: { singleton: true },
          },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  devServer: {
    inline: true,
    contentBase: outFilePath,
  },
};
