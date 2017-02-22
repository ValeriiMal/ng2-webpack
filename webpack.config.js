'use strict';

let webpack = require('webpack');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/bootstrap.ts',
        vendor: './src/vendor.ts',
    },
    output: {
        path: './dist/',
        filename: '[name].js',
    },

    watch: true,

    devtool: 'source-map',

    resolve: {
        extensions: ['.ts', '.js', '.css'],
    },

    devServer: {
        inline: true,
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
            },
            {
                test: /\.css$/,
                loaders: 'style-loader!css-loader',
            },
            {
                test: /\.html$/,
                loaders: 'html-loader',
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor']
        }),
        new HtmlWebpackPlugin({
            template: 'src/home.html'
        }),
    ],
};
