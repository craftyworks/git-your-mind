<template>
  <div class="card bg-dark" style="min-height: 400px">
    <h5 class="card-header text-white">Git | Merge (Conflict)</h5>
    <div class="card-body bash-console text-white">
      <div class="d-flex git-command-body">
        <div class="git-state-screen">
          <div class="git-pointer-screen">
            <empty-space></empty-space>
            <text-box>
              <p>README.md</p>
              <p>1. # Hey !</p>
            </text-box>
            <git-transition :boxOffset="-1">
              <git-head ref="head" v-show="!complete" :branch="'master'">Head</git-head>
            </git-transition>
            <empty-space></empty-space>
          </div>
          <div class="git-commit-screen">
            <git-commit-box :hasArrow="false"></git-commit-box>
            <div class="d-flex flex-row">
              <git-commit-box></git-commit-box>
              <git-commit-box :border-color="`#FF6E6E`" :direction="'downLeft'"></git-commit-box>
              <text-box style="padding-top: 5px">
                <p>README.md</p>
                <p>1. # Hello !</p>
              </text-box>
            </div>
            <div class="d-flex flex-row">
              <git-commit-box></git-commit-box>
              <git-commit-box :border-color="`#FF6E6E`" :branch="'dev'"></git-commit-box>
            </div>
            <slide-y-down-transition :duration="500">
              <git-commit-box v-show="complete">
                <template v-slot:arrow="slotProps">
                  <merge-arrow :width="slotProps.boxSize"></merge-arrow>
                </template>
              </git-commit-box>
            </slide-y-down-transition>
          </div>
        </div>
        <git-bash style="min-height: 270px">
          <bash-command v-if="step[0]" :command="command[0]" @onComplete="next" :hasNext="true" :result-type="'error'">
            <p class="mb-0">CONFLICT (content)</p>
            <p class="mb-0">Merge conflict in <strong>README.md</strong></p>
          </bash-command>
          <bash-command v-if="step[1]" :command="command[1]" @onComplete="nextStep" :hasNext="true">
            <slide-x-left-transition :duration="500">
              <p v-show="conflict" class="mb-0 ml-3">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</p>
            </slide-x-left-transition>
            <p class="mb-0 ml-3"># Hey !</p>
            <slide-x-left-transition :duration="500">
              <div v-show="conflict">
                <p class="mb-0 ml-3">=======</p>
                <p class="mb-0 ml-3"># Hello !</p>
                <p class="mb-0 ml-3"> &lt;&lt;&lt;&lt;&lt;&lt;&lt; dev</p>
              </div>
            </slide-x-left-transition>
          </bash-command>
          <bash-command v-if="step[2]" :command="command[2]" @onComplete="next" :hasNext="true"></bash-command>
          <bash-command v-if="step[3]" :command="command[3]" @onComplete="next" :hasNext="true"></bash-command>
          <bash-command v-if="step[4]" @onComplete="restartCommand"/>
        </git-bash>
      </div>
    </div>
  </div>
</template>

<script>

import { SlideYDownTransition, SlideXLeftTransition } from 'vue2-transitions'
import MergeArrow from './MergeArrow'
import GitCommand from '@/mixins/git-command'
import TextBox from '@/components/TextBox'

export default {
  name: 'MergeConflict',
  components: { SlideYDownTransition, SlideXLeftTransition, MergeArrow, TextBox },
  mixins: [GitCommand],
  data () {
    return {
      command: ['git merge dev', 'vi README.md', 'git add README.md', 'git commit -m "Merging..."'],
      conflict: true
    }
  },
  methods: {
    nextStep () {
      this._.delay(() => {
        this.conflict = false
        this._.delay(() => { this.next() }, 1000)
      }, 1000)
    },
    restartCommand (delay = 1000) {
      this._.delay(() => {
        this.step.splice(0, this.step.length)
        this.conflict = true
        this.startCommand()
      }, delay)
    }
  },
  computed: {
    complete () {
      return this.step[4] === true
    }
  }
}
</script>

<style scoped>
</style>
