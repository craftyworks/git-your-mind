import { delay, debounce } from 'lodash'

export default {
  install (Vue) {
    Vue.set(Vue.prototype, '_', { debounce, delay })
  }
}
