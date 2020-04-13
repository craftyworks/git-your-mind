import BashCommand from './BashCommand'
import EmptySpace from './EmptySpace'
import GitArrow from './GitArrow'
import GitBash from './GitBash'
import GitCommitBox from './GitCommitBox'
import GitHead from './GitHead'
import GitTransition from './GitTransition'
import Modal from './Modal'
import TextBox from './TextBox'

export default {
  install (Vue) {
    Vue.component(BashCommand.name, BashCommand)
    Vue.component(EmptySpace.name, EmptySpace)
    Vue.component(GitArrow.name, GitArrow)
    Vue.component(GitBash.name, GitBash)
    Vue.component(GitCommitBox.name, GitCommitBox)
    Vue.component(GitHead.name, GitHead)
    Vue.component(GitTransition.name, GitTransition)
    Vue.component(Modal.name, Modal)
    Vue.component(TextBox.name, TextBox)
  }
}
