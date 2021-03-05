var path = require('path');
var IconfontWebpackPlugin = require('../../../src/index.js');
var options = require('../../iconfont-options.js');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'none',
    entry: {
        main: path.resolve(__dirname, '../src/main.js')
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'font/[name]-[hash:8].[ext]'
                }
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    plugins: [
        new IconfontWebpackPlugin(options),
        // new CopyWebpackPlugin([
        //     {
        //         from: path.resolve(__dirname, '../static'),
        //         to: '',
        //         ignore: ['.*']
        //     }
        // ])
        new HtmlWebpackPlugin({
            template: 'test/web_project/src/fonts/font-preview.html',
            inject: true,
            filename: 'index.html',
            chunks: ['main'],
            title: 'webpack-iconfont-plugin-nodejs',
        })
    ],
    resolve: {
        modules: ['node_modules']
    }
};
