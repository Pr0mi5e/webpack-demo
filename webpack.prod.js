const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    devtool:'source-map',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'js/[name].[chunkhash].js',
        chunkFilename: "js/[name].[chunkhash].js"
    },
    plugins:[

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
})
