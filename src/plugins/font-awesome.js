import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  install (Vue) {
    library.add(fas)
    Vue.component('font-awesome-icon', FontAwesomeIcon)
    dom.watch()
  }
}
