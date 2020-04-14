module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Git About'
        return args
      })
  },
  // transpileDependencies: ['vue-smooth-scroll'],
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  outputDir: 'docs',
  filenameHashing: false,
  productionSourceMap: false
}
