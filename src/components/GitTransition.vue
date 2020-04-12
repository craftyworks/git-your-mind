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
    boxOffset: {
      type: Number,
      default: null
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
    calcOffset () {
      if (this.boxOffset) {
        const boxSize = this.mobileDevice ? this.CONST.MOBILE.SQUARE_BOX_WIDTH : this.CONST.SCREEN.SQUARE_BOX_WIDTH
        const margin = this.name === 'yAxis' ? 30 : 10
        return this.boxOffset * (boxSize + margin)
      }
      return this.offset
    },
    tweenEnterObj () {
      const obj = { ease: Back.easeInOut, onComplete: () => this.$emit('afterEnter'), onStart: () => this.$emit('startEnter') }
      switch (this.name) {
        case 'xAxis':
          return Object.assign({}, obj, { x: 0 })
        case 'yAxis':
          return Object.assign({}, obj, { y: 0 })
      }
      return {}
    },
    tweenLeaveObj () {
      const obj = { ease: Back.easeInOut, onComplete: () => this.$emit('afterLeave'), onStart: () => this.$emit('startLeave') }
      switch (this.name) {
        case 'xAxis':
          return Object.assign({}, obj, { x: this.calcOffset })
        case 'yAxis':
          return Object.assign({}, obj, { y: this.calcOffset })
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
