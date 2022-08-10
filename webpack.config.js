const path = require('path');
const { EnvironmentPlugin } = require('webpack');

module.exports = {
  entry: './index.ts',
  // devtool: 'inline-source-map',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    fallback: {
      url: false,
    },
  },
  output: {
    library: 'FNAPIcom',
    filename: 'FNAPIcom.js',
    path: path.resolve(__dirname),
  },
  plugins: [
    new EnvironmentPlugin({
      IS_BROWSER: 'true',
    }),
  ],
};
