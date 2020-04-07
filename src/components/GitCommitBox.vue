<template>
  <div>
    <div class='square-box'>
      <div class="square-content">
        <span> <slot></slot></span>
      </div>
    </div>
    <git-arrow v-if="hasArrow"></git-arrow>
  </div>
</template>

<script>
import GitArrow from './GitArrow'

export default {
  name: 'GitCommitBox',
  components: { GitArrow },
  props: {
    hasArrow: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
  .square-box {
    width: 60px;
    height: 60px;
    overflow: hidden;
    background: #282A36;
    border: 2px solid #BD93F9;
    border-radius: 10px;
    margin: 5px;
    display: flex;
    justify-content: center;
  }

  .square-content {
    display: flex;
    overflow: hidden;
    flex: auto;
    border: 2px solid #BD93F9;
    margin: 4px;
    border-radius: 8px;
    color: white;
  }

  .square-content span {
    flex: auto;
    margin: auto 0;
    text-align: center;
    color: white;
    font-size: small;
  }
</style>
