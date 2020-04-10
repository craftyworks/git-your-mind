<template>
  <div class="git-head">
    <div class='square-box'>
      <div class="square-content">
        <span class="text-white small"><slot>Head</slot></span>
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
    }
  },
  computed: {
    boxSize () {
      return this.mobileDevice ? this.CONST.MOBILE.SQUARE_BOX_WIDTH : this.CONST.SCREEN.SQUARE_BOX_WIDTH
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

  .square-box {
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

  .square-content {
    overflow: hidden;
    padding-bottom: 5px;
  }

</style>
