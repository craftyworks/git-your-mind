<template>
  <div class="card bg-dark" style="min-height: 400px">
    <h5 class="card-header text-white">Git | Revert</h5>
    <div class="card-body bash-console text-white">
      <p class="card-text">Reverts the changes hat commits introduce.</p>
      <p class="card-text">Creates a new commit with the reverted changes.</p>
      <div class="d-flex git-command-body">
        <div class="git-state-screen">
          <div class="git-pointer-screen">
            <empty-space :count="2"></empty-space>
            <git-transition :boxOffset="-1">
              <git-head ref="head" v-show="!complete">Head</git-head>
            </git-transition>
            <empty-space :count="1"></empty-space>
          </div>
          <div class="git-commit-screen">
            <git-commit-box :hasArrow="false"></git-commit-box>
            <git-commit-box :fileName="'index.js'">ec5be</git-commit-box>
            <git-commit-box></git-commit-box>
            <slide-y-down-transition :duration="500">
              <div v-show="complete">
                <git-commit-box :fileName="'index.js'" :type="'-'"></git-commit-box>
              </div>
            </slide-y-down-transition>
          </div>
        </div>
        <git-bash style="min-height: 120px">
          <bash-command v-if="step[0]" :command="command[0]" @onComplete="next" :hasNext="true"/>
          <bash-command v-if="step[1]" @onComplete="restartCommand"/>
        </git-bash>
      </div>
    </div>
  </div>
</template>

<script>
import { SlideYDownTransition } from 'vue2-transitions'
import GitCommand from '@/mixins/git-command'

export default {
  name: 'RevertCommand',
  components: {
    SlideYDownTransition
  },
  mixins: [GitCommand],
  data () {
    return {
      command: ['git revert ec5be']
    }
  }
}
</script>

<style scoped>
</style>
