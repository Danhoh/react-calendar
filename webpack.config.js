const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressPlugin = require('progress-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');


module.exports = (env) => {
  return {
    entry: './src/App.jsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.[fullhash].js',
      clean: true,
    },
    resolve: {
      extensions: ['.js', '.json', '.jsx'],
    },
    module: { // loaders
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
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: true,
              },
            },
          ],
        },
        { // fonts

          test: /\.(woff|woff2|eot|ttf|otf)$/i,

          type: 'asset/resource',

        },
        { // images

          test: /\.(png|svg|jpg|jpeg|gif)$/i,

          type: 'asset/resource',

        },
        // {
        //   test: /\.(png|svg|jpg|jpeg|gif)$/i,

        //   use: [
        //     {
        //       loader: 'url-loader',
        //       options: {
        //         limit: false,
        //       },
        //     },
        //   ],
        // },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html'),
      }),
      new FaviconsWebpackPlugin({
        logo: './src/static/favicon.svg', // svg works too!
        mode: 'webapp', // optional can be 'webapp', 'light' or 'auto' - 'auto' by default
        devMode: 'webapp', // optional can be 'webapp' or 'light' - 'light' by default 
        favicons: {
          icons: {
            coast: false,
            yandex: false
          }
        }
      }),
      new ProgressPlugin(true)
    ],
    devServer: {
      historyApiFallback: true,
      port: 8080,
      open: true, // opens new browser tab with page
      hot: true,
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    mode: env.mode || 'development',
    performance: {
      hints: false
    }
  }
}