var path = require('path');

var postcssLoader = {
  loader: 'postcss-loader',
  options: {
    plugins: function () {
      return [
        require('autoprefixer')
      ]
    }
  }
};

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          postcssLoader
        ]
      }, {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          postcssLoader,
          'sass-loader'
        ]
      }, {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          postcssLoader,
          'less-loader'
        ]
      }
    ]
  }
}
