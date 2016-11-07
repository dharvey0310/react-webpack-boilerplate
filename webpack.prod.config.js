var webpack = require('webpack')
var fs = require('fs')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

require.extensions['.sass', '.scss', '.css'] = () => { return; }

var webpackConfig = {
    entry: __dirname + "/src/index.js",
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpg|gif)?$/,
                loader: 'url?prefix=images/&name=[path][name].[ext]&limit=8096'
            },
            
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css!postcss')
            },
            {
                test: /\.sass$/,
                loader: ExtractTextPlugin.extract('css!postcss!sass')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!postcss!sass')
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin("css/styles.css"),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                unused: true,
                dead_code: true,
                warnings: false,
            }
        })
    ]
}

module.exports = webpackConfig