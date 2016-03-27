var path = require('path');
var ROOT_PATH = path.resolve(__dirname);


module.exports = {
    entry: [
        'webpack/hot/dev-server',
        path.resolve(ROOT_PATH, 'app/main')
    ],

    output: {
        path: path.resolve(ROOT_PATH, 'build'),
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },

            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};
