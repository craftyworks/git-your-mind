import bootstrap from './bootstrap'
import fontAwesome from './font-awesome'
import lodash from './lodash'
import smoothScroll from './smooth-scroll'
import konva from './konva'
import Const from './const'

export default {
  install (Vue) {
    Vue.use(bootstrap)
    Vue.use(fontAwesome)
    Vue.use(lodash)
    Vue.use(smoothScroll)
    Vue.use(konva)
    Vue.use(Const)
  }
}
