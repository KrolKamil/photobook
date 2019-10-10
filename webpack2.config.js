const path = require('path');
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');


module.exports = {
  entry: {
    'arb_bundle': './widget-core/Entry.js'
  },
  output: {
    path: path.resolve(__dirname, '../src/public'),
    filename: './js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components|src)/,
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
  },
  plugins: [
    new MergeIntoSingleFilePlugin({
      files: {
        './js/core.js': [
          './widget-core/arb_core.js'
        ],
        './css/fullcall-form-styles.css': [
          './widget-core/styles/fullcall-form-styles.css'
        ],
        './css/fullcall-styles.css': [
          './widget-core/styles/fullcall-styles.css'
        ],
        './css/fullcall-chat-styles.css': [
          './widget-core/styles/fullcall-chat-styles.css'
        ],
        './css/fullcall-invite-styles.css': [
          './widget-core/styles/fullcall-invite-styles.css'
        ]
      }
    })
  ]
};
