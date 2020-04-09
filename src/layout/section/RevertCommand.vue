<template>
  <div class="card bg-dark" style="min-height: 400px">
    <h5 class="card-header text-white">Git | Revert</h5>
    <div class="card-body bash-console text-white">
      <p class="card-text">Reverts the changes hat commits introduce.</p>
      <p class="card-text">Creates a new commit with the reverted changes.</p>
      <div class="d-flex">
        <div class="git-state-screen">
          <div class="git-pointer-screen">
            <empty-space :count="2"></empty-space>
            <git-transition :offset="-90">
              <git-head ref="head" v-show="!complete">Head</git-head>
            </git-transition>
            <empty-space :count="1"></empty-space>
          </div>
          <div class="git-commit-screen">
            <git-commit-box :hasArrow="false">035cc</git-commit-box>
            <git-commit-box :fileName="'index.js'">ec5be</git-commit-box>
            <git-commit-box>9e78i</git-commit-box>
            <slide-y-down-transition :duration="500">
              <div v-show="complete">
                <git-commit-box :fileName="'index.js'" :type="'-'">i8fd3</git-commit-box>
              </div>
            </slide-y-down-transition>
          </div>
        </div>
        <git-bash>
          <bash-command v-if="step[0]" :command="command[0]" @onComplete="next" :hasNext="true"/>
          <bash-command v-if="step[1]" @onComplete="restartReset"/>
        </git-bash>
      </div>
    </div>
  </div>
</template>

<script>
import { SlideYDownTransition } from 'vue2-transitions'

export default {
  name: 'RevertCommand',
  components: {
    SlideYDownTransition
  },
  data () {
    return {
      command: ['git revert ec5be'],
      step: [],
      next: () => this.step.push(true)
    }
  },
  methods: {
    startReset () {
      this._.delay(() => {
        this.step.push(true)
      }, 1000)
    },
    restartReset (delay = 1000) {
      this._.delay(() => {
        this.step.splice(0, this.step.length)
        this.startReset()
      }, delay)
    }
  },
  computed: {
    complete () {
      return this.step[1] === true
    }
  },
  mounted () {
    this.startReset()
  }
}
</script>

<style scoped>

</style>
