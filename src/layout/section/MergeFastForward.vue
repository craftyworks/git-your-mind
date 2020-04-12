<template>
  <div class="card bg-dark" style="min-height: 400px">
    <h5 class="card-header text-white">Git | Merge (fast-forward)</h5>
    <div class="card-body bash-console text-white">
      <p class="card-text">Default behavior when the merging branch has all of the current branch's commits</p>
      <p class="card-text">Doesn't create a new commit, thus doesn't modify existing branches</p>
      <div class="d-flex git-command-body">
        <div class="git-state-screen">
          <div class="git-pointer-screen">
            <empty-space></empty-space>
            <git-transition :boxOffset="-1">
              <git-head ref="head" v-show="!complete" :branch="'master'">Head</git-head>
            </git-transition>
            <empty-space></empty-space>
          </div>
          <div class="git-commit-screen">
            <git-commit-box :hasArrow="false"></git-commit-box>
            <git-commit-box></git-commit-box>
            <merge-transition :complete="complete" :boxOffset=-1 :branch="'dev'"></merge-transition>
          </div>
        </div>
        <git-bash style="min-height: 150px">
          <bash-command v-if="step[0]" :command="command[0]" @onComplete="next" :hasNext="true"/>
          <bash-command v-if="step[1]" @onComplete="restartCommand"/>
        </git-bash>
      </div>
    </div>
  </div>
</template>

<script>
import MergeTransition from './MergeTransition'
import GitCommand from '@/mixins/git-command'

export default {
  name: 'MergeFastForward',
  components: {
    MergeTransition
  },
  mixins: [GitCommand],
  data () {
    return {
      command: ['git merge dev']
    }
  }
}
</script>

<style scoped>
</style>
