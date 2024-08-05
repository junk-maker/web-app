const webpack = require('webpack');

module.exports = {
  mode: 'production',
  // devtool: 'eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Codevolution'),
    }),
  ],
};