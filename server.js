var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
var publicPath = !!config[0] ? config[0].output.publicPath : config.output.publicPath;

new webpackDevServer(webpack(config), {
    publicPath: publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    // 设置代理，解决本地请求跨域问题
    proxy: {
        '/statis/*': {
            target: 'http://data.ppmoney.net',
            changeOrigin: true,
            secure: false
        }
    }
}).listen('8000', 'localhost', function(err) {
    if(err) console.log(err);

    console.log('Listening at http://localhost:8000');
});