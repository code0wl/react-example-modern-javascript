var path = require('path');
var merge = require('webpack-merge');
var webpack = require('webpack');
var TARGET = process.env.TARGET || 'dev';
var ROOT_PATH = path.resolve(__dirname);
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var common = {

    entry: [path.resolve(ROOT_PATH, 'src/index')],

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    output: {
        path: path.resolve(ROOT_PATH, 'build'),
        filename: 'bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'React ES2015'
        }),
		new ExtractTextPlugin("yiifaa.css", {
			allChunks: true
		})
    ],

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                include: path.resolve(ROOT_PATH, 'src')
            },

            {
                test: /\.css$/,
                //loaders: ['style', 'css']
				loader: ExtractTextPlugin.extract("style-loader", "css-loader?advanced=1")
            },
			{
					test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
					loader: 'url-loader?limit=100000'
			},
            {
                    test: /\.scss$/,
                    loader: ExtractTextPlugin.extract("style-loader", "css-loader?advanced=1!sass-loader")
            },
            {
                    test: /\.less$/,
                    loader: ExtractTextPlugin.extract("style-loader", "css-loader?advanced=1!less-loader")
            },
            {
                    test: /\.(png|jpg|jpeg|gif)$/,
                    loader: "url-loader?limit=100000"
            },
        ]
    }
};

switch (TARGET) {
    case 'build':
        module.exports = merge(common, {
            plugins: [
                new webpack.optimize.UglifyJsPlugin({
                    compress: {
                        warnings: false
                    }
                }),
                new webpack.DefinePlugin({
                    'process.env': {
                        'NODE_ENV': JSON.stringify('production')
                    }
                })
            ]
        });

        break;

    case 'dev':
        module.exports = merge(common, {
            entry: [
                'webpack-dev-server/client?http://localhost:8080',
                'webpack/hot/dev-server'
            ]
        });
        break;
}