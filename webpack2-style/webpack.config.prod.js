var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin"); // 样式生成css文件插件


var postcssLoader = {
  loader: 'postcss-loader',
  options: {
    plugins: function () {
      return [
        require('autoprefixer')
      ]
    }
  }
}

module.exports = {
  entry: {
    prod: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', postcssLoader]
        })
      }, {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', postcssLoader, 'sass-loader']
        })
      }, {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', postcssLoader, 'less-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].css")
  ]
}
