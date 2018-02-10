const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PACKAGE = require('./package.json');

const banner = PACKAGE.name + ' - ' + PACKAGE.version + ' | (c) 2017, ' + new Date().getFullYear() + '  ' + PACKAGE.author + ' | ' + PACKAGE.license + ' | ' + PACKAGE.homepage;

const configuration = {
  cache: true,
  watch: false,
  context: __dirname,
  entry: {
    scripts: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      './example/example.js'
    ],
    vendor: [
      'react',
      'react-dom',
      'react-tap-event-plugin',
      'redux',
      'redux-immutable',
      'redux-thunk',
      'react-router',
      'react-router-dom',
      'react-router-redux',
      'immutable',
      'classnames',
      'axios',
      'moment',
      'gsap'
    ],
    styles: [
      './example/example.scss'
    ]
  },
  devtool: 'cheap-module-source-map',
  resolve: {
    enforceExtension: false,
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      enforce: 'pre',
      use: [{
        loader: 'eslint-loader'
      }]
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        query: {
          presets: [
            'stage-0',
            'es2017',
            'react',
            'flow',
            'env'
          ],
          plugins: [
            'transform-flow-strip-types'
          ]
        }
      }]
    }, {
      test: /\.(css|scss|sass)$/,
      use: ExtractTextPlugin.extract({
        fallback: ['style-loader'],
        use: [{
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        }, {
          loader: 'resolve-url-loader'
        }, {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }]
      })
    }, {
      test: /\.html$/,
      use: [{
        loader: 'html-loader'
      }]
    }, {
      test: /\.(jpg|png|woff|woff2|eot|ttf|svg|ico)$/,
      use: [{
        loader: 'file-loader?name=[name]-[hash].[ext]'
      }]
    }, {
      test: /\.(json|geojson)$/,
      use: [{
        loader: 'json-loader'
      }]
    }]
  },
  output: {
    pathinfo: true,
    filename: "[name]-[hash].js",
    path: path.resolve("./dist"),
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin("[name]-[hash].css"),
    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor"],
      filename: "[name]-[hash].js",
      minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
      template: "./example/example.ejs",
      inject: false,
      minify: {
        collapseWhitespace: true,
        removeComments: true
      },
      version: PACKAGE.version,
      title: PACKAGE.name
    }),
    new webpack.BannerPlugin(banner),
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = configuration;
