const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
 entry: {
  app: './src/index.js'
 },
 output: {
  filename: '[name].js',
  path: path.resolve(__dirname, './dist'),
  publicPath: '/dist'
 },
 module: {
  rules:[{
   test: /\.js$/,
   loader: 'babel-loader',
   exclude: '/node_modules/'
  }, {
   test: /\.scss$/,
   use: [
    'style-loader',
    MiniCssExtractPlugin.loader,
    {
     loader: 'css-loader',
     options: { sourceMap: true }
    }, {
     loader: 'sass-loader',
     options: { sourceMap: true }
    } 
   ]
  }, {
   test: /\.css$/,
   use: [
    MiniCssExtractPlugin.loader,
    "css-loader"
   ]
  }]
 },
 devServer: {
  overlay: true
 },
 plugins: [
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: '[name].css',
    chunkFilename: '[id].css',
  }),
 ],
}