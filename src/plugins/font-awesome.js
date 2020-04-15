import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faCircle, faStar, faChevronUp, faBars, faEnvelope, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faDev, faGitAlt } from '@fortawesome/free-brands-svg-icons'

export default {
  install (Vue) {
    library.add(faCircle, faStar, faChevronUp, faBars, faEnvelope, faTimes, faGithub, faDev, faGitAlt)
    dom.watch()
  }
}
