<template>
  <transition @enter="enter" @leave="leave" :css="false">
    <slot></slot>
  </transition>
</template>

<script>
import { TimelineLite, Back, visibility } from 'gsap'

// eslint-disable-next-line no-unused-vars
const gaspHack = [visibility]

export default {
  name: 'GitTransition',
  props: {
    offset: {
      type: Number,
      default: 90
    },
    name: {
      type: String,
      default: 'yAxis'
    },
    duration: {
      type: Number,
      default: 1
    },
    tweenEnter: Object,
    tweenLeave: Object
  },
  computed: {
    tweenEnterObj () {
      switch (this.name) {
        case 'xAxis':
          return { x: 0, ease: Back.easeInOut }
        case 'yAxis':
          return { y: 0, ease: Back.easeInOut }
      }
      return {}
    },
    tweenLeaveObj () {
      switch (this.name) {
        case 'xAxis':
          return { x: this.offset, ease: Back.easeInOut }
        case 'yAxis':
          return { y: this.offset, ease: Back.easeInOut }
      }
      return {}
    }
  },
  methods: {
    enter (el, done) {
      const t1 = new TimelineLite()
      t1.to(el, this.duration, this.tweenEnter || this.tweenEnterObj)
    },
    leave (el, done) {
      const t1 = new TimelineLite()
      t1.to(el, this.duration, this.tweenLeave || this.tweenLeaveObj)
    }
  }
}
</script>

<style scoped>

</style>
