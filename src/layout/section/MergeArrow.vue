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
  computed: {
    newWidth () {
      return this.width + (this.mobileDevice ? 10 : 20)
    },
    arrowStyle () {
      return {
        width: this.newWidth + 'px',
        height: this.height + 'px'
      }
    },
    configKonva () {
      return { width: this.newWidth, height: this.height }
    },
    configDownRightArrow () {
      const hCenter = (this.newWidth / 2)
      const gap = this.mobileDevice ? 10 : 20
      return Object.assign({}, this.configArrow, {
        points: [hCenter + gap, 0, this.newWidth - this.strokeWidth, this.height - this.strokeWidth]
      })
    }
  }
}
</script>

<style scoped>

</style>
