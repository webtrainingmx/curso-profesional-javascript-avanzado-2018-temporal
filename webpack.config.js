const webpack = require('webpack');

module.exports = {
  entry: './src/es2015/app.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      }
    ]
  },
  watch: true,
  output: {
    filename: './bundle.js'
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin()
  ]

};
