module.exports = {
  presets: [
    ['@vue/cli-plugin-babel/preset', { polyfills: ['es.promise', 'es.symbol'] }]
  ],
  plugins: process.env.NODE_ENV === 'production' ? ['transform-remove-console'] : []
}
