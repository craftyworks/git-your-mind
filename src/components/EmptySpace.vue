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
    emptyStyle () {
      return {
        height: `${this.count * 90}px`
      }
    }
  }
}
</script>

<style scoped>
  .empty-space {
    width: 60px;
    display: flex;
    justify-content: center;
  }
</style>
