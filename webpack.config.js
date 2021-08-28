const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: ['regenerator-runtime/runtime.js', './src/index.js'],
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js',
    },
    resolve: {
        modules: [path.resolve(__dirname, '/'), 'node_modules'],
        alias: {
            '@': path.resolve(__dirname, 'styles'),
            '~': path.resolve(__dirname, 'src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            }, {
                test: /\.css$/,
                use: ['css-loader'],
            }, {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin(),
    ],
};
