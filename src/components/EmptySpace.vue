<template>
  <div class="empty-space" :style="emptyStyle">
  </div>
</template>

<script>
export default {
  name: 'EmptySpace',
  props: {
    count: {
      type: Number,
      default: 1
    }
  },
  computed: {
    boxSize () {
      return this.mobileDevice ? this.CONST.MOBILE.SQUARE_BOX_WIDTH : this.CONST.SCREEN.SQUARE_BOX_WIDTH
    },
    emptyStyle () {
      return {
        width: `${this.boxSize}px`,
        height: `${this.count * (this.boxSize + 30)}px`
      }
    }
  }
}
</script>

<style scoped>
  .empty-space {
    margin: 0px 5px;
    display: flex;
    justify-content: center;
  }
</style>
