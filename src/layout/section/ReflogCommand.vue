<template>
  <div class="card bg-dark" style="min-height: 400px">
    <h5 class="card-header text-white">Git | Reflog</h5>
    <div class="card-body bash-console text-white">
      <p class="card-text">Shows the history of actions in the repo.</p>
      <p class="card-text">With this information, you can easily undo changes that have been made to a repository with
        <strong>git reset</strong></p>
      <div class="d-flex git-command-body">
        <div class="git-state-screen">
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
            <div class="d-flex flex-column-reverse">
              <git-commit-box :hasArrow="false" :border-color="'#FF6E6E'">e35cc</git-commit-box>
              <git-commit-box :border-color="'#FF6E6E'">a8fe5</git-commit-box>
              <git-commit-box :border-color="'#FF6E6E'">76d12</git-commit-box>
              <git-commit-box :border-color="'#FF6E6E'" branch="origin/master">efc81</git-commit-box>
              <empty-space></empty-space>
            </div>
          </div>
        </div>
        <git-bash style="min-height: 200px">
          <bash-command v-if="step[0]" :command="command[0]" @onComplete="next" :hasNext="true">
            <p class="mb-0">84e55 HEAD@{1} commit(merge)</p>
            <p class="mb-0">a8fe5 HEAD@{2} commit</p>
            <p class="mb-0">8d83a HEAD@{3} reset moving Head~1</p>
            <p class="mb-0">e35cc HEAD@{4} commit(initial)</p>
          </bash-command>
          <bash-command v-if="step[1]" @onComplete="restartCommand"/>
        </git-bash>
      </div>
    </div>
  </div>
</template>

<script>

import GitCommand from '@/mixins/git-command'
import MergeArrow from './MergeArrow'

export default {
  name: 'ReflogCommand',
  mixins: [GitCommand],
  components: { MergeArrow },
  data () {
    return {
      command: ['git reflog']
    }
  },
  computed: {
    arrowHeight () {
      const boxSize = this.mobileDevice ? this.CONST.MOBILE.SQUARE_BOX_WIDTH : this.CONST.SCREEN.SQUARE_BOX_WIDTH
      const margin = 30
      return 2 * (boxSize + margin) + 20
    }
  },
  methods: {}
}
</script>

<style scoped>
</style>
