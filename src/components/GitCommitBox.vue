<template>
  <div class="git-commit">
    <div>
      <div class='square-box' :style="squareBoxStyle">
        <div class="square-content" :style="squareContentStyle">
          <span><slot></slot></span>
        </div>
      </div>
      <git-arrow v-if="hasArrow" :direction="direction"></git-arrow>
    </div>
    <div style="align-items: baseline; justify-items: flex-start;">
      <div v-if="hasFile" class="commit-file-box" :style="commitFileStyle">
        <div class="commit-file">
          <span class="text-white small">{{type + ' ' + fileName}}</span>
        </div>
      </div>
    </div>
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
    },
    direction: {
      default: 'down'
    },
    fileName: {},
    type: {
      default: '+'
    },
    borderColor: {
      type: String,
      default: '#BD93F9'
    },
    borderColor1: {
      type: String
    },
    borderColor2: {
      type: String
    }
  },
  computed: {
    hasFile () {
      return !!(this.fileName)
    },
    squareBoxStyle () {
      return { border: `2px solid ${this.borderColor1 || this.borderColor}` }
    },
    squareContentStyle () {
      return { border: `2px solid ${this.borderColor2 || this.borderColor}` }
    },
    commitFileStyle () {
      const color = this.type === '+' ? '69ff94' : 'FF6E6E'
      return {
        background: `#${color}40`,
        border: `2px solid #${color}`
      }
    }
  }
}
</script>

<style scoped>
  .git-commit {
    display: flex;
    align-items: center;
    flex: none;
  }

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

  .commit-file-box {
    width: 70px;
    height: 20px;
    overflow: hidden;
    background: #69ff9440;
    border: 2px solid #69ff94;
    border-radius: 5px;
    margin: 0px 5px 20px 5px;
    display: flex;
    align-items: center;
  }

  .commit-file {
    overflow: hidden;
    text-align: left;
    padding-left: 3px;
    padding-bottom: 5px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
