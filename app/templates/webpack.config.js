const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const outFilePath = path.resolve(__dirname, 'public');

module.exports = {
  entry: {
    line: ['regenerator-runtime', path.resolve(__dirname, './src/line.js')],
    bar: ['regenerator-runtime', path.resolve(__dirname, './src/bar.js')],
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
          'style-loader',
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        // Provide your node_modules path where @chartshq/muze
        // package is installed.
        from: path.resolve('./node_modules', '@chartshq/muze/dist'),
        to: 'examples/',
        ignore: ['*.DS_Store'],
      },
    ]),
  ],
  devServer: {
    inline: true,
    contentBase: outFilePath,
  },
};
