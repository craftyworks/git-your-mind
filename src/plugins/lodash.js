// import { delay, debounce } from 'lodash'
import { delay, debounce } from 'underscore/modules'

export default {
  install (Vue) {
    Vue.set(Vue.prototype, '_', { debounce, delay })
  }
}
