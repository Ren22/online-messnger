const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js',
    publicPath: '/',
  },
  devtool: 'source-map',
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: '/',
    },
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '.test.ts'],
    alias: {
      handlebars: 'handlebars/dist/handlebars.js',
      utils: path.resolve(__dirname, 'src/utils/'),
      pages: path.resolve(__dirname, 'src/pages/'),
      components: path.resolve(__dirname, 'src/components/'),
      services: path.resolve(__dirname, 'src/services/'),
      global: path.resolve(__dirname, 'src/global/'),
      baseClasses: path.resolve(__dirname, 'src/baseClasses/'),
    },
  },
  plugins: [new HtmlWebpackPlugin({
    template: './index.html',
    scriptLoading: 'module',
  })],
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, 'tsconfig.json'),
            },
          },
        ],
        exclude: /(node_modules)/,
      },
      {
        test: /\.less$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                strictMath: true,
              },
            },
          },
        ],
      },
    ],
  },
};
