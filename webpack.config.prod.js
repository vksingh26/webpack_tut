const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',  //will start reading from here as its a entry point
    output: {
        path: path.resolve(__dirname, 'dist'), //point at the folder where we want to generate our output
        filename: 'bundle.js',
        publicPath: ''
    },
    devtool: 'none',  //way of generating source map 
    module: {
      rules: [   //this rule's for js files
          {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /node-modules/
          },
          {
              test: /\.css$/,
              exclude: /node-modules/,
              use: [
                { loader: 'style-loader' },
                {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 1,
                    modules: {
                      localIdentName: '[name]__[local]__[hash:base64:5]'
                    }
                  }
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    ident: 'postcss',
                    plugins: () => [autoprefixer()]
                  }
                }
              ]
          },
          {
            test: /\.(png|jpe?g|gif)$/,
            loader: 'url-loader?limit=8000&name=images/[name].[ext]'
          }
      ]  
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ]
};