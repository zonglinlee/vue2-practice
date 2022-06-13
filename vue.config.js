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
    },
    devServer: {
        port: 8888,
    },
    configureWebpack: {
        devtool: 'source-map',
    },
    // note::: docker build 的时候不要加 publicPath
    publicPath: process.env.NODE_ENV === 'production' ? '/vue2-practice/' : '/',
}
