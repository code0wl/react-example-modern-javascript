var path = require('path');
var rPath = path.resolve(__dirname);
module.exports = {
  entry: [
    'webpack/hot/dev-server',
    path.resolve(rPath, 'app/main.js'),
  ],
  output: {
    path: path.resolve(rPath, 'dist'),
    filename: 'bundle.js',
  }, };