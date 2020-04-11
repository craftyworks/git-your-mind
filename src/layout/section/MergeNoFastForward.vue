<template>
  <div class="card bg-dark" style="min-height: 400px">
    <h5 class="card-header text-white">Git | Merge (no-fast-forward)</h5>
    <div class="card-body bash-console text-white">
      <p class="card-text">Default behavior when current branch contains commits that the merging branch doesn't
        have</p>
      <p class="card-text">Creates a new commit which merges two branches together without modifying existing
        branches</p>
      <div class="d-flex git-command-body">
        <div class="git-state-screen">
          <div class="git-pointer-screen">
            <empty-space :count="2"></empty-space>
            <git-transition :boxOffset="-1">
              <git-head ref="head" v-show="!complete" :branch="'master'">Head</git-head>
            </git-transition>
            <empty-space></empty-space>
          </div>
          <div class="git-commit-screen">
            <git-commit-box :hasArrow="false">035cc</git-commit-box>
            <div class="d-flex flex-row">
              <git-commit-box>ec5be</git-commit-box>
              <git-commit-box :border-color="`#FF6E6E`" :direction="'downLeft'">76dce</git-commit-box>
            </div>
            <div class="d-flex flex-row">
              <git-commit-box>035cc</git-commit-box>
              <git-commit-box :border-color="`#FF6E6E`" :branch="'dev'">e3475</git-commit-box>
            </div>
            <slide-y-down-transition :duration="500">
              <git-commit-box v-show="complete">
                <template v-slot:default>9278i</template>
                <template v-slot:arrow="slotProps">
                  <merge-arrow :width="slotProps.boxSize"></merge-arrow>
                </template>
              </git-commit-box>
            </slide-y-down-transition>
          </div>
        </div>
        <git-bash style="min-height: 150px">
          <bash-command v-if="step[0]" :command="command[0]" @onComplete="next" :hasNext="true"/>
          <bash-command v-if="step[1]" @onComplete="restartReset"/>
        </git-bash>
      </div>
    </div>
  </div>
</template>

<script>

import { SlideYDownTransition } from 'vue2-transitions'
import MergeArrow from './MergeArrow'

export default {
  name: 'MergeNoFastForward',
  components: { SlideYDownTransition, MergeArrow },
  data () {
    return {
      command: ['git merge dev'],
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
