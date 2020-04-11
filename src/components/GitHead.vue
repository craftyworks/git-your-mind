<template>
  <div class="git-head">
    <div>
      <div class='pointer-box'>
        <div class="pointer-content" :style="pointerContentStyle">
          <span class="text-white"><slot>Head</slot></span>
        </div>
      </div>
      <div v-if="branch" class='branch-box'>
        <div class="branch-content" :style="branchContentStyle">
          <span class="text-white">{{branch}}</span>
        </div>
      </div>
    </div>
    <div>
      <git-arrow :width="20" :height="boxSize" :direction="'right'" style="margin: 5px 0px"></git-arrow>
    </div>
  </div>
</template>

<script>
import GitArrow from './GitArrow'
import { mapState } from 'vuex'

export default {
  name: 'GitHead',
  components: { GitArrow },
  props: {
    left: {
      type: Number
    },
    top: {
      type: Number
    },
    branch: String
  },
  computed: {
    boxSize () {
      return this.mobileDevice ? this.CONST.MOBILE.SQUARE_BOX_WIDTH : this.CONST.SCREEN.SQUARE_BOX_WIDTH
    },
    pointerContentStyle () {
      const fontSize = this.mobileDevice ? 'x-small' : 'small'
      const mb = this.mobileDevice ? '2px' : '4px'
      return {
        fontSize: fontSize,
        marginBottom: mb
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
    ...mapState(['mobileDevice'])
  }
}
</script>

<style scoped>
  .git-head {
    display: flex;
    align-items: center;
    flex: none;
  }

  .pointer-box {
    width: 60px;
    height: 20px;
    overflow: hidden;
    background: #282A36;
    border: 2px solid #F1FA8C;
    border-radius: 5px;
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pointer-content {
    overflow: hidden;
    flex: none;
  }

  .branch-box {
    width: 60px;
    height: 20px;
    overflow: hidden;
    background: #282A36;
    border: 2px solid #A4FFFF;
    border-radius: 5px;
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .branch-content {
    overflow: hidden;
    flex: none;
  }
</style>
