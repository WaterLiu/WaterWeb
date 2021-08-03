const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log("webpack.config.js loaded");

let config = {
    mode: 'development',

    entry: {
        app: './src/main.js'
    },
    devtool: 'source-map',
    devServer: {
        port: 9000,
        stats: {
            warnings: false
        }
    },
    module: {
        rules: [
            // {
            //     test: /\.worker\.js$/, //以.worker.js结尾的文件将被worker-loader加载
            //     use: {
            //         loader: 'worker-loader',
            //         options: {
            //             inline: true
            //             // fallback: false
            //         }
            //     },
            //
            // },
            {
                // Transpile ES6 to ES5 with babel
                // Remove if your app does not use JSX or you don't need to support old browsers
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: [/node_modules/],
                options: {
                    presets: ['@babel/preset-react']
                }
            },

        ]
    },
    plugins: [new HtmlWebpackPlugin({title: 'WaterLiu Test'})]
};

module.exports = config;
