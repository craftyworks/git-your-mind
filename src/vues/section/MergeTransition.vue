<template>
  <div class="d-flex">
    <empty-space></empty-space>
    <transition @enter="enter" @leave="leave" :css="false">
      <git-commit-box v-show="!complete" :direction="direction" :border-color1="borderColor" :border-color2="`#FF6E6E`" :branch="branch">
        <slot></slot>
      </git-commit-box>
    </transition>
  </div>
</template>

<script>
import GitTransition from '@/components/GitTransition'
import { TimelineLite, Back, visibility } from 'gsap'

// eslint-disable-next-line no-unused-vars
const gaspHack = [visibility]

export default {
  name: 'MergeTransition',
  extends: GitTransition,
  props: {
    complete: Boolean,
    name: { default: 'xAxis' },
    branch: String
  },
  data () {
    return {
      direction: 'downLeft',
      borderColor: '#FF6E6E'
    }
  },
  computed: {
    tweenEnterObj () {
      return { x: 0, ease: Back.easeInOut }
    },
    tweenLeaveObj () {
      return { x: this.calcOffset, ease: Back.easeInOut }
    }
  },
  methods: {
    enter (el, done) {
      const t1 = new TimelineLite()
      t1.to(el, this.duration, this.tweenEnterObj)

      const t2 = new TimelineLite()
      t2.to(this.$data, this.duration * 1.5, {
        borderColor: '#FF6E6E',
        onStart: () => { this.direction = 'invisible' },
        onComplete: () => { this.direction = 'downLeft' }
      })
    },
    leave (el, done) {
      const t1 = new TimelineLite()
      t1.to(el, this.duration, this.tweenLeaveObj)

      const t2 = new TimelineLite()
      t2.to(this.$data, this.duration, {
        borderColor: '#BD93F9',
        onStart: () => { this.direction = 'invisible' },
        onComplete: () => { this.direction = 'down' }
      })
    }
  }
}
</script>

<style scoped>

</style>
