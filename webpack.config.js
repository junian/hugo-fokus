const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/js/fokus.js',
  output: {
    filename: 'fokus_template.js',
    path: path.resolve(__dirname, 'assets', 'js'),
  },
};
