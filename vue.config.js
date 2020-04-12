module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Git About'
        return args
      })
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  outputDir: 'docs'
}
