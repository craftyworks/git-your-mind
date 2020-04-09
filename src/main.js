import Plugins from './plugins'
import Components from './components'
import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.use(Plugins)
Vue.use(Components)

Vue.config.productionTip = false
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
