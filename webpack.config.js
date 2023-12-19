const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressPlugin = require('progress-webpack-plugin')

module.exports = {
  entry: './src/App.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.[fullhash].js',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }],
              "@babel/preset-react"
            ]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new ProgressPlugin(true)
  ],
  devServer: {
    historyApiFallback: true,
    // static: {
    //   directory: path.join(__dirname, "/"),
    // },
    port: 8081,
    open: true
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  mode: 'production',
  performance: {
    hints: false
  }
}