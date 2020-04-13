<template>
  <div class="card bg-dark" style="min-height: 400px">
    <h5 class="card-header text-white">Git | Reflog (reset)</h5>
    <div class="card-body bash-console text-white">
      <div class="d-flex git-command-body">
        <div class="git-state-screen">
          <div class="git-pointer-screen" style="flex-basis: 30%;">
            <empty-space count="4"></empty-space>
            <git-transition :boxOffset="3">
              <git-head ref="head" v-show="!complete" :branch="'master'">Head</git-head>
            </git-transition>
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
        <git-bash style="min-height: 350px">
          <bash-command v-if="step[0]" :command="command[0]" @onComplete="next" :hasNext="true">
            <p class="mb-0">84e55 HEAD@{1} commit(merge)</p>
            <p class="mb-0">a8fe5 HEAD@{2} commit</p>
            <p class="mb-0">8d83a HEAD@{3} reset moving Head~1</p>
            <p class="mb-0">e35cc HEAD@{4} commit(initial)</p>
          </bash-command>
          <bash-command v-if="step[1]" :command="command[1]" @onComplete="next" :hasNext="true"></bash-command>
          <bash-command v-if="step[2]" :command="command[2]" @onComplete="next" :hasNext="true">
            <p class="mb-0">a8fe5 HEAD@{1} reset moving to HEAD{1}</p>
            <p class="mb-0">84e55 HEAD@{2} commit(merge)</p>
            <p class="mb-0">a8fe5 HEAD@{3} commit</p>
            <p class="mb-0">8d83a HEAD@{4} reset moving Head~1</p>
          </bash-command>
          <bash-command v-if="step[3]" @onComplete="restartCommand"/>
        </git-bash>
      </div>
    </div>
  </div>
</template>

<script>

import GitCommand from '@/mixins/git-command'
import MergeArrow from './MergeArrow'

export default {
  name: 'ReflogCommand2',
  mixins: [GitCommand],
  components: { MergeArrow },
  data () {
    return {
      command: ['git reflog', 'git reset HEAD@{1}', 'git reflog']
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
  },
  methods: {}
}
</script>

<style scoped>
</style>
