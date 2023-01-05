const path = require('path');

module.exports = {
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '/dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  entry: './src/index.js',
  devServer: {
    static: {
      directory: path.join(__dirname, '/public'),
    },
    port: 9000,
  }
}