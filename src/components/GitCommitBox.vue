<template>
  <div class="git-commit">
    <div>
      <div class='square-box' :style="squareBoxStyle">
        <div class="square-content code" :style="squareContentStyle">
          <span><slot></slot></span>
        </div>
      </div>
      <git-arrow v-if="hasArrow" :direction="direction" :width="boxSize"></git-arrow>
    </div>
    <div style="align-items: baseline; justify-items: flex-start;">
      <div v-if="hasFile" class="commit-file-box" :style="commitFileStyle">
        <div class="commit-file code">
          <span class="text-white small">{{type + ' ' + fileName}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GitArrow from './GitArrow'
import { mapState } from 'vuex'

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
    boxSize () {
      return this.mobileDevice ? this.CONST.MOBILE.SQUARE_BOX_WIDTH : this.CONST.SCREEN.SQUARE_BOX_WIDTH
    },
    squareBoxStyle () {
      const borderSize = this.mobileDevice ? 2 : 2
      return { border: `${borderSize}px solid ${this.borderColor1 || this.borderColor}`, width: `${this.boxSize}px`, height: `${this.boxSize}px` }
    },
    squareContentStyle () {
      const borderSize = this.mobileDevice ? 0 : 2
      const fontSize = this.mobileDevice ? 'x-small' : 'small'
      return {
        border: `${borderSize}px solid ${this.borderColor2 || this.borderColor}`,
        fontSize: `${fontSize}`
      }
    },
    commitFileStyle () {
      const color = this.type === '+' ? '69ff94' : 'FF6E6E'
      const boxSize = this.mobileDevice ? 70 : 70
      const borderSize = this.mobileDevice ? 2 : 2
      const fontSize = this.mobileDevice ? 'small' : 'small'

      return {
        background: `#${color}40`,
        width: `${boxSize}px`,
        border: `${borderSize}px solid #${color}`,
        fontSize: `${fontSize}`
      }
    },
    ...mapState(['mobileDevice'])
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
    overflow: hidden;
    background: #282A36;
    border-radius: 10px;
    margin: 5px;
    display: flex;
    justify-content: center;
  }

  .square-content {
    display: flex;
    overflow: hidden;
    flex: auto;
    margin: 4px;
    border-radius: 8px;
    color: white;
    font-size: small;
  }

  .square-content span {
    flex: auto;
    margin: auto 0;
    text-align: center;
    color: white;
  }

  .commit-file-box {
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
