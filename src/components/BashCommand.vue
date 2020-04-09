<template>
  <div class="">
    <span class="bash-prompt">master$</span>
    <span class="bash-command" ref="input"></span>
    <slide-y-up-transition :duration="500">
      <div v-show="completed" class="bash-result">
        <slot></slot>
      </div>
    </slide-y-up-transition>
  </div>
</template>

<script>
import { SlideYUpTransition } from 'vue2-transitions'
import Typed from 'typed.js'

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

  .bash-prompt {
    color: #FF92DF;
    margin-right: 5px;
  }

  .bash-command {
    color: #F8F8F2;
  }

  .bash-result {
    color: #69FF94;
  }

</style>
