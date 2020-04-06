module.exports = {
  configureWebpack: {
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/git-your-mind/' : '/',
  outputDir: 'docs'
}
