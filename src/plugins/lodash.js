import _ from 'lodash'

export default {
  install (Vue) {
    Vue.set(Vue.prototype, '_', _)
  }
}
