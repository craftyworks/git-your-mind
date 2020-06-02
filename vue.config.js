const path = require('path')
const PrerenderSpaPlugin = require('prerender-spa-plugin')

const productionPlugins = [
  new PrerenderSpaPlugin({
    staticDir: path.join(__dirname, 'docs'),
    routes: [
      '/'
    ],
    renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
      renderAfterElementExists: '#app',
      headless: true,
      renderAfterTime: 1000
    })
  })
]

module.exports = {
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(...productionPlugins)
    }
  },
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
