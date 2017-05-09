const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: ['webpack-dev-server/client?http://localhost:8000', 'webpack/hot/only-dev-server', './src/index.js'],
        react: ['webpack-dev-server/client?http://localhost:8000', 'webpack/hot/only-dev-server', 'react', 'react-dom']
    },
    output: {
        path: path.join(__dirname, '/assets/'),
        filename: '[name].js',
        publicPath: 'http://localhost:8000/assets/dev'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.scss$/, loader: 'style!css!autoprefixer!sass' },
            { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=500000&name=[path][name].[ext]' }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom'
        })
    ]
}