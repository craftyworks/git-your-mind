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
      type: Number,
      default: 60
    },
    height: {
      type: Number,
      default: 20
    },
    strokeWidth: {
      type: Number,
      default: 2
    },
    direction: {
      type: String,
      default: 'down'
    }
  },
  data () {
    return {
      configKonva: {
        width: this.width,
        height: this.height
      }
    }
  },
  computed: {
    arrowStyle () {
      return {
        width: this.width,
        height: this.height
      }
    },
    configArrow () {
      const hCenter = (this.width / 2)
      const vCenter = (this.height / 2)

      switch (this.direction) {
        case 'right':
          return {
            x: 0,
            y: 0,
            points: [0, vCenter, this.width - this.strokeWidth, vCenter],
            pointerLength: this.strokeWidth * 2,
            pointerWidth: this.strokeWidth * 2,
            fill: '#F8F8F2',
            stroke: '#F8F8F2',
            strokeWidth: this.strokeWidth
          }
      }
      return {
        x: 0,
        y: 0,
        points: [hCenter, 0, hCenter, this.height - this.strokeWidth],
        pointerLength: this.strokeWidth * 2,
        pointerWidth: this.strokeWidth * 2,
        fill: '#F8F8F2',
        stroke: '#F8F8F2',
        strokeWidth: this.strokeWidth
      }
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
  .git-arrow {
    overflow: hidden;
    display: flex;
    margin: 0px 5px;
    display: flex;
    justify-content: center;
  }
</style>
