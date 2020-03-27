/**
 * @file webpack.config.js
 * @author Laughing Jacky
 * @email 4264332(#qq.com)
 * @create date 2020-03-27 12:50:29
 * @modify date 2020-03-27 12:50:29
 */
const path = require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
    entry: {
        'single-spa.config': './single-spa.config.js'
    },
    output: {
        publicPath: '/dist/',
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: [path.resolve(__dirname, 'node_modules')],
                loader: 'babel-loader'
            },
            {
                test: /\.svelte$/,
                loader: 'svelte-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.riot$/,
                exclude: /node_modules/,
                use: [{
                    loader: '@riotjs/webpack-loader',
                    options: {
                        hot: false // set it to true if you are using hmr
                    // add here all the other @riotjs/compiler options riot.js.org/compiler
                    // template: 'pug' for example
                    }
                }]
            }
        ]
    },
    node: {
        fs: 'empty'
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        },
        modules: [path.resolve(__dirname, 'node_modules')]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ],
    devtool: 'source-map',
    externals: [],
    devServer: {
        historyApiFallback: true
    }
};
