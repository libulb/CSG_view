// 引入jq需要加入以下代码
const webpack = require('webpack')

module.exports = {

    configureWebpack: {

    },
    devServer: {
        public: 'localhost:8080',
        hot: true,
        disableHostCheck: true,
    },
    chainWebpack: config => {
        config.plugin('provide').use(webpack.ProvidePlugin, [{
            $: 'jquery',
            jquery: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }])
    }
};