/*
 * Author: Jay Mark
 * Email: admin@majie.co
 * Website: http://majie.co
 */

var path = require('path'),
    webpack = require('webpack'),
    HtmlwebpackPlugin = require('html-webpack-plugin'),
    merge = require('webpack-merge'),
    Clean = require('clean-webpack-plugin')

var TARGET = process.env.npm_lifecycle_event,
    ROOT_PATH = path.resolve(__dirname),
    BUILD_PATH = path.resolve(ROOT_PATH, "dist"),
    SRC_PATH = path.resolve(ROOT_PATH, "src")

var exportConfig = null

var commonConfig = {
  entry: {
    'index': path.resolve(SRC_PATH, 'index.js')
  },

  output: {
    path: BUILD_PATH,
    filename: '[name].js?'
  },

  resolve: {
    modulesDirectories: ['node_modules', './src/components'],
    extensions: ['', '.js', '.jsx', '.css']
  },

  module: {
    noParse: [],
    loaders: [
      {
          test: /\.less$/,
          loader: 'style-loader!css-loader!less-loader'
      },
      {
          test: /\.css$/,
          loaders: ['style', 'css', 'postcss'],
          include: SRC_PATH
      },
      {
          test: /\.js?$/,
          loaders: ['babel'],
          include: SRC_PATH
      },
      {
          test: /\.png|jpg|jpeg|gif|svg$/,
          loader: "url?name=img/[name].[ext]",
          include: SRC_PATH
      },
      {
          test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?name=fonts/[name].[ext]&limit=10000&mimetype=application/font-woff'
      },
      {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?name=fonts/[name].[ext]&limit=10000&mimetype=application/octet-stream'
      },
      {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file?name=fonts/[name].[ext]'
      },
      {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?name=fonts/[name].[ext]&limit=10000&mimetype=image/svg+xml'
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new HtmlwebpackPlugin({
        filename: 'index.html',
        template: 'src/resources/htmlTempt/index.html',
        chunks: ['index']
    })
  ]
}



if (TARGET === 'start' || !TARGET) {
  exportConfig = merge(commonConfig, {
    devtool: 'eval-source-map',
    devServer: {
      host: '0.0.0.0',
      port: 6066,
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'DEBUG': true
      })
    ]
  })
}

if (TARGET === 'dist') {
  exportConfig = merge(commonConfig, {
    devtool: false,
    output: {
      publicPath: './',
    },
    plugins: [
      new Clean([BUILD_PATH]),
      new webpack.DefinePlugin({
        'DEBUG': false
      })
    ]
  })
}

module.exports = exportConfig
