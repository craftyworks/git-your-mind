import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faCircle, faStar, faChevronUp, faBars } from '@fortawesome/free-solid-svg-icons'

export default {
  install (Vue) {
    library.add(faCircle, faStar, faChevronUp, faBars)
    dom.watch()
  }
}
