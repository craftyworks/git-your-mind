<template>
  <div class='git-arrow' :style="arrowStyle">
    <v-stage :config="configKonva">
      <v-layer>
        <v-arrow :config="configArrow"></v-arrow>
        <v-arrow :config="configDownRightArrow"></v-arrow>
      </v-layer>
    </v-stage>
  </div>
</template>

<script>
import GitArrow from '@/components/GitArrow'

export default {
  name: 'MergeArrow',
  extends: GitArrow,
  props: {
    downRightArrowHeight: {
      default: 20
    },
    showDownRightArrow: {
      default: true
    }
  },
  computed: {
    newWidth () {
      return this.width + (this.mobileDevice ? 10 : 20)
    },
    configKonva () {
      return { width: this.newWidth, height: this.height }
    },
    arrowStyle () {
      return {
        width: this.newWidth + 'px',
        height: this.height + 'px'
      }
    },
    configDownRightArrow () {
      const hCenter = (this.newWidth / 2)
      const gap = this.mobileDevice ? 10 : 20
      if (this.showDownRightArrow) {
        return Object.assign({}, this.configArrow, {
          points: [hCenter + gap, 0, this.newWidth - this.strokeWidth, this.downRightArrowHeight - this.strokeWidth]
        })
      } else {
        return Object.assign({}, this.configArrow, {
          pointerLength: 0,
          pointerWidth: 0,
          strokeWidth: 0
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
