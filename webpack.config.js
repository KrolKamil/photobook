const path = require('path');

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname),
        filename: 'main.bundle.js'
      },
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env',
                  {
                    'plugins': ['@babel/plugin-proposal-class-properties']
                  }
                ]
              }
            }
          }
        ]
      }
  };
  