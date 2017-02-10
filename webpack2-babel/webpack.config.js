var path = require('path');
var webpack = require('webpack');


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
    // pathinfo: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [['es2015', {
            modules: false   // 设置为false  使webpack使用默认的模块处理，并使tree shaking生效（使用UglifyJsPlugin插件时去掉不使用的代码）
          }]]
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
        drop_console: false,
      }
    })
  ]
}
