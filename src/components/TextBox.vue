<template>
  <div class="text-box" :style="textBoxStyle">
    <div class="text-box-content" :style="textBoxContentStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextBox',
  props: {},
  computed: {
    boxSize () {
      return this.mobileDevice ? this.CONST.MOBILE.SQUARE_BOX_WIDTH : this.CONST.SCREEN.SQUARE_BOX_WIDTH
    },
    textBoxStyle () {
      return {
        width: `${this.boxSize + 20}px`,
        height: `${this.boxSize + 30}px`
      }
    },
    textBoxContentStyle () {
      const fontSize = this.mobileDevice ? 'x-small' : 'x-small'
      const mb = this.mobileDevice ? '2px' : '4px'
      return {
        fontSize: fontSize,
        marginBottom: mb
      }
    }
  }
}
</script>

<style scoped>
  .text-box {
    overflow: hidden;
    margin: 0px 5px;
    padding-top: 25px;
  }

  .text-box-content {
    background: #69FF9430;
    border: 1px solid #69FF94;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

</style>
