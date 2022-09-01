const webpack = require('webpack')
module.exports = {
    lintOnSave: false,
    chainWebpack: (config) => {
        const oneOfsMap = config.module.rule('scss').oneOfs.store
        oneOfsMap.forEach((item) => {
            item.use('sass-resources-loader')
                .loader('sass-resources-loader')
                .options({
                    // Provide path to the file with resourcess
                    // resources: './path/to/resources.scss',
                    // Or array of paths
                    resources: ['./src/styles/index.scss'],
                })
                .end()
        })
        config.plugin('provide').use(webpack.ProvidePlugin, [
            {
                $: 'jquery',
                jquery: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
            },
        ])
    },
    devServer: {
        port: 8888,
    },
    // note::: docker build 的时候不要加 publicPath
    publicPath: process.env.NODE_ENV === 'production' ? '/vue2-practice/' : '/',
}
