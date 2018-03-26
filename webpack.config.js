const path = require('path')

const config = {
  entry: './src/server.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/,
	loader: 'babel-loader',
	exclude: /node_modules/
      }
    ]
  }
}

module.exports = config
