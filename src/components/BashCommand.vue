<template>
  <div class="">
    <span class="bash-pwd">master</span><span class="bash-prompt">$</span>
    <span class="bash-command" ref="input"></span>
    <slide-y-up-transition :duration="500">
      <div v-show="completed" class="bash-result">
        <slot></slot>
      </div>
    </slide-y-up-transition>
  </div>
</template>

<script>
import { TimelineLite, Elastic, visibility } from 'gsap'
import { SlideYUpTransition } from 'vue2-transitions'
import Typed from 'typed.js'

// eslint-disable-next-line no-unused-vars
const gaspHack = [visibility]

export default {
  name: 'BashCommand',
  components: { SlideYUpTransition },
  data () {
    return {
      completed: false
    }
  },
  props: {
    command: {
      type: String,
      default: ''
    },
    hasNext: {
      type: Boolean,
      default: false
    },
    startDelay: {
      type: Number,
      default: 1000
    }
  },
  mounted () {
    // eslint-disable-next-line no-new
    new Typed(this.$refs.input, {
      strings: [this.command],
      typeSpeed: 40,
      startDelay: this.startDelay,
      onStart: (arrayPos, self) => {
      },
      onComplete: (self) => {
        this._.delay(() => {
          if (this.hasNext) {
            self.cursor.style.display = 'none'
          }
          if (this.command) {
            const t1 = new TimelineLite()
            t1.to(self.el, 0.2, { margin: 1, opacity: 0.9, ease: Elastic.easeInOut, repeat: 3 })
          }
          this.completed = true
          this._.delay(() => {
            this.$emit('onComplete')
          }, 300)
        }, 1000)
      }
    })
  }
}
</script>

<style scoped>
  .bash-console {
    background-color: #282A36;
  }

  .bash-pwd {
    color: #FF92DF;
  }

  .bash-prompt {
    color: #F8F8F2;
    margin-right: 5px;
  }

  .bash-command {
    color: #F8F8F2;
  }

  .bash-result {
    color: #69FF94;
  }

</style>
