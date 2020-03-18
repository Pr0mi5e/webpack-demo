const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'production'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name]..css',
      chunkFilename: 'css/[id].css'
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js'
  },
  module: {
    rules: [
      // {
      //     test:/\.css$/,
      //     use:[
      //         {
      //             loader: MiniCssExtractPlugin.loader,
      //             options: {
      //                 publicPath: '../css/',
      //                 hmr: process.env.NODE_ENV === 'development'
      //             }
      //         },
      //         'css-loader'
      //     ]
      // },
      // {
      //     test:/\.(png|svg|jpg|gif)$/,
      //     use:[
      //         'file-loader'
      //     ]
      // },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}
