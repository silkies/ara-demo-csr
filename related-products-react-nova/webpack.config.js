const path = require('path');

module.exports = {
  target: 'web',
  node: {
    fs: 'empty',
    module: 'empty',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'client.js',
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        include: [/node_modules/, /src/],
        use: [
          {
            loader: require.resolve("style-loader", { paths: [__dirname] }),
          },
          {
            loader: require.resolve("css-loader", { paths: [__dirname] }),
            options: {
              modules: false,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
