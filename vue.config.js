module.exports = {
  configureWebpack: {
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  outputDir: 'docs'
}
