const path = require('path');

const entryFile = path.resolve(__dirname, './app/templates/src/index.js');
const outFilePath = path.resolve(__dirname, './app/templates/public');

module.exports = {
    entry: entryFile,
    output: {
        path: outFilePath,
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: { singleton: true }
                    },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            }
        ]
    },
    devServer: {
        inline: true,
        contentBase: outFilePath
    }
};
