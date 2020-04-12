<template>
  <div class='git-arrow' :style="arrowStyle">
    <v-stage :config="configKonva">
      <v-layer>
        <v-arrow :config="configArrow"></v-arrow>
      </v-layer>
    </v-stage>
  </div>
</template>

<script>
export default {
  name: 'GitArrow',
  props: {
    width: {
      default: 60
    },
    height: {
      default: 20
    },
    strokeWidth: {
      default: 2
    },
    direction: {
      default: 'down'
    },
    color: {
      default: '#F8F8F2'
    }
  },
  computed: {
    configKonva () {
      return { width: this.width, height: this.height }
    },
    arrowStyle () {
      return {
        width: this.width + 'px',
        height: this.height + 'px'
      }
    },
    configArrow () {
      const hCenter = (this.width / 2)
      const vCenter = (this.height / 2)

      const config = {
        x: 0,
        y: 0,
        points: [hCenter, 0, hCenter, this.height - this.strokeWidth],
        pointerLength: this.strokeWidth * 2,
        pointerWidth: this.strokeWidth * 2,
        fill: this.color,
        stroke: this.color,
        strokeWidth: this.strokeWidth
      }
      const offset = this.mobileDevice ? 5 : 10

      switch (this.direction) {
        case 'left':
          return Object.assign({}, config, {
            points: [this.width, vCenter, this.strokeWidth, vCenter]
          })
        case 'right':
          return Object.assign({}, config, {
            points: [0, vCenter, this.width - this.strokeWidth, vCenter]
          })
        case 'downLeft':
          return Object.assign({}, config, {
            points: [hCenter - offset, 0, 0 + this.strokeWidth, this.height - this.strokeWidth]
          })
        case 'downRight':
          return Object.assign({}, config, {
            points: [hCenter + offset, 0, this.width - this.strokeWidth, this.height - this.strokeWidth]
          })
        case 'invisible':
          return Object.assign({}, config, {
            pointerLength: 0,
            pointerWidth: 0,
            strokeWidth: 0
          })
        default:
          return config
      }
    }
  }
}
</script>

<style scoped>
</style>
