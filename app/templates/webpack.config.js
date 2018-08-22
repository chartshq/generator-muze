const path = require('path');

const outFilePath = path.resolve(__dirname, 'public');

module.exports = {
  entry: {
    line: path.resolve(__dirname, './src/line.js'),
    bar: path.resolve(__dirname, './src/bar.js'),
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
