import { mapState } from 'vuex'

export default {
  install (Vue) {
    const mixin = {
      computed: mapState(['mobileDevice'])
    }
    Vue.mixin(mixin)
  }
}
