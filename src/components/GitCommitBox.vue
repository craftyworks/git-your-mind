<template>
  <div class="git-commit">
    <div>
      <div class='square-box' :style="squareBoxStyle">
        <div class="square-content code" :style="squareContentStyle">
          <span><slot>{{commitId}}</slot></span>
        </div>
      </div>
      <slot name="arrow" :boxSize="boxSize">
        <git-arrow v-if="hasArrow" :direction="direction" :width="boxSize"></git-arrow>
      </slot>
    </div>
    <div>
      <div v-if="hasFile" class="commit-file-box" :style="commitFileStyle">
        <div class="commit-file">
          <span class="text-white">{{type + ' ' + fileName}}</span>
        </div>
      </div>
      <div v-if="hasFile2" class="commit-file-box" :style="commitFileStyle2">
        <div class="commit-file">
          <span class="text-white">{{type + ' ' + fileName2}}</span>
        </div>
      </div>
      <div v-if="branch" class='branch-box'>
        <div class="branch-content" :style="branchContentStyle">
          <span class="text-white">{{branch}}</span>
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
      default: true
    },
    direction: {
      default: 'down'
    },
    fileName: {},
    fileName2: {},
    type: {
      default: '+'
    },
    borderColor: {
      default: '#BD93F9'
    },
    borderColor1: String,
    borderColor2: String,
    branch: String
  },
  computed: {
    hasFile () {
      return !!(this.fileName)
    },
    hasFile2 () {
      return !!(this.fileName2)
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
      const borderSize = this.mobileDevice ? 2 : 2
      const fontSize = this.mobileDevice ? 'x-small' : 'small'
      const marginB = this.hasFile2 ? 5 : 20
      const marginT = this.hasArrow ? 0 : 20

      return {
        background: `#${color}40`,
        border: `${borderSize}px solid #${color}`,
        fontSize: `${fontSize}`,
        margin: `${marginT}px 5px ${marginB}px 5px`
      }
    },
    commitFileStyle2 () {
      const color = this.type === '+' ? '69ff94' : 'FF6E6E'
      const fontSize = this.mobileDevice ? 'x-small' : 'small'

      return {
        background: `#${color}40`,
        fontSize: `${fontSize}`,
        margin: '0px 5px 15px 5px'
      }
    },
    branchContentStyle () {
      const fontSize = this.mobileDevice ? 'x-small' : 'small'
      const mb = this.mobileDevice ? '2px' : '4px'
      return {
        fontSize: fontSize,
        marginBottom: mb
      }
    },
    commitId () {
      return 'xxxxx'.replace(/[x]/g, function (c) {
        const r = Math.random() * 16 | 0
        return r.toString(16)
      })
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
    align-self: center;
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
    padding: 0px 5px;
    display: flex;
    align-items: center;
  }

  .commit-file {
    overflow: hidden;
    text-align: left;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .branch-box {
    height: 20px;
    overflow: hidden;
    background: #282A36;
    border: 2px solid #A4FFFF;
    border-radius: 5px;
    margin: 0px 0px 20px 0px;
    padding: 0px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .branch-content {
    overflow: hidden;
    flex: none;
  }
</style>
