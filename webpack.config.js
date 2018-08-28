const HtmlWebpackPlugin = require("html-webpack-plugin")
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  module: {
    rules: [      
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!sass-loader",
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "./index.html"
    }),
    new ExtractTextPlugin('style.css')
  ],
  devServer:{
    contentBase: '/src',
    inline:true,
    stats:"errors-only",
    watchContentBase: true
 }
}