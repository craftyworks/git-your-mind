<template>
  <div class="app-container">
    <div class="banner-card" style="min-height: 400px">
      <div class="card-body bash-console text-white">
        <div class="d-flex git-command-body">
          <div class="git-state-screen" style="flex-basis: 55%; padding-right: 50px">
            <div class="git-pointer-screen" style="flex-basis: 30%;">
              <empty-space :count="4"></empty-space>
              <git-head ref="head" :branch="'master'">Head</git-head>
            </div>
            <div class="git-commit-screen flex-row" style="align-items: flex-end;">
              <div class="d-flex flex-column-reverse">
                <git-commit-box :hasArrow="false">e35cc</git-commit-box>
                <git-commit-box>a8fe5</git-commit-box>
                <git-commit-box>
                  <template v-slot:default>84e55</template>
                  <template v-slot:arrow="slotProps">
                    <merge-arrow :width="slotProps.boxSize" :height="arrowHeight"></merge-arrow>
                  </template>
                </git-commit-box>
              </div>
              <div class="d-flex flex-column-reverse" style="align-items: flex-start;">
                <git-commit-box :hasArrow="false" :border-color="'#FF6E6E'"></git-commit-box>
                <div class="d-flex flex-row">
                  <git-commit-box :border-color="'#FF6E6E'"></git-commit-box>
                  <git-commit-box :border-color="'#FFFFA5'" :direction="'downLeft'"
                                  style="margin-left: 20px;"></git-commit-box>
                </div>
                <div class="d-flex flex-row">
                  <git-commit-box :border-color="'#FF6E6E'"></git-commit-box>
                  <git-commit-box :border-color="'#FFFFA5'" style="margin-left: 20px;"></git-commit-box>
                </div>
                <div class="d-flex flex-row">
                  <git-commit-box :border-color="'#FF6E6E'">
                    <template v-slot:arrow="slotProps">
                      <merge-arrow :width="slotProps.boxSize"></merge-arrow>
                    </template>
                  </git-commit-box>
                  <git-commit-box :border-color="'#FFFFA5'" class="ml-0"></git-commit-box>
                </div>
                <div class="d-flex flex-row">
                  <empty-space></empty-space>
                  <git-commit-box :border-color="'#FFFFA5'" :branch="'dev'" style="margin-left: 20px"></git-commit-box>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex flex-column" style="flex: 1; flex-basis: 45%">
            <git-bash style="min-height: 200px; text-align: left; font-size: 12px">
              <bash-command v-if="step[0]" :command="command[0]" @onComplete="next" :hasNext="true">
                <p class="mb-0">84e55 HEAD@{1} commit(merge)</p>
                <p class="mb-0">a8fe5 HEAD@{2} commit</p>
                <p class="mb-0">8d83a HEAD@{3} reset moving Head~1</p>
                <p class="mb-0">e35cc HEAD@{4} commit(initial)</p>
              </bash-command>
              <bash-command v-if="step[1]" :command="command[1]" @onComplete="next" :hasNext="true"></bash-command>
              <bash-command v-if="step[2]" :command="command[2]" @onComplete="next" :hasNext="true"></bash-command>
              <bash-command v-if="step[3]"/>
            </git-bash>
            <div>
              <div class="card bg-dark text-left text-dark banner-card">
                <div class="card-body bg-light d-flex ">
                  <img class="float-left" src="@/assets/img/git-icon-512.svg" width="80px">
                  <div class="text-center">
                    <h3 class="card-title" ref="title">Git Command</h3>
                    <h5 class="card-text">visualized</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import GitCommand from '@/mixins/git-command'
import MergeArrow from './MergeArrow'

export default {
  name: 'BannerCommand',
  mixins: [GitCommand],
  components: { MergeArrow },
  data () {
    return {
      command: ['git reflog', 'git -am "Fix 🚀"', 'git rebase -i e35cc']
    }
  },
  computed: {
    arrowHeight () {
      const boxSize = this.mobileDevice ? this.CONST.MOBILE.SQUARE_BOX_WIDTH : this.CONST.SCREEN.SQUARE_BOX_WIDTH
      const margin = 30
      return 2 * (boxSize + margin) + 20
    },
    complete () {
      return this.step[2] === true
    }
  }
}
</script>

<style scoped>
  .banner-card {
    border: 2px solid #000000;
    box-shadow: 5px 6px 0px #000000;
    margin: 10px 0px 10px 0px;
  }
</style>
