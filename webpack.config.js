const path = require('path');

module.exports = {
  entry: './src/index.js', // Your entry point
  output: {
    filename: 'bundle.js', // The name of the bundle file
    path: path.resolve(__dirname, 'dist'), // The output directory
  },
  mode: 'development', // 'development' or 'production'
};
