module.exports = {
    configureWebpack: {
        watchOptions: {
            poll: 1000,
            aggregateTimeout: 600,
        },
    }
}