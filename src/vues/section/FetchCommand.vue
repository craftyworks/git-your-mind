<template>
  <div class="card bg-dark" style="min-height: 400px">
    <h5 class="card-header text-white">Git | Fetching</h5>
    <div class="card-body bash-console text-white">
      <p class="card-text">Downloads content from a remote branch or repository without modifying the local state</p>
      <div class="d-flex git-command-body">
        <div class="git-state-screen">
          <div class="git-pointer-screen">
            <empty-space></empty-space>
            <git-head ref="head" :branch="'master'">Head</git-head>
            <empty-space :count="2"></empty-space>
          </div>
          <div class="git-commit-screen">
            <div class="d-flex flex-row">
              <git-commit-box :hasArrow="false">e35cc</git-commit-box>
              <git-commit-box :hasArrow="false" :border-color="'#FF6E6E'">e35cc</git-commit-box>
            </div>
            <div class="d-flex flex-row">
              <git-commit-box>a8fe5</git-commit-box>
              <git-commit-box :border-color="'#FF6E6E'">a8fe5</git-commit-box>
            </div>
            <div class="d-flex flex-row">
              <empty-space></empty-space>
              <git-commit-box :border-color="'#FF6E6E'">76d12</git-commit-box>
              <div ref="cherry1" class="position-absolute" :style="cherryStyle">
                <git-commit-box :border-color="'#FF6E6E'">76d12</git-commit-box>
              </div>
            </div>
            <div class="d-flex flex-row">
              <empty-space></empty-space>
              <git-commit-box :border-color="'#FF6E6E'" branch="origin/master">efc81</git-commit-box>
              <div ref="cherry2" class="position-absolute" :style="cherryStyle">
                <git-commit-box :border-color="'#ff6e6e'">efc81</git-commit-box>
              </div>
            </div>
          </div>
        </div>
        <git-bash style="min-height: 120px">
          <bash-command v-if="step[0]" :command="command[0]" @onComplete="nextStep" :hasNext="true"/>
          <bash-command v-if="step[1]" @onComplete="restartCommand"/>
        </git-bash>
      </div>
    </div>
  </div>
</template>

<script>

import GitCommand from '@/mixins/git-command'
import { TimelineLite, Back, visibility } from 'gsap'

// eslint-disable-next-line no-unused-vars
const gaspHack = [visibility]

export default {
  name: 'FetchCommand',
  mixins: [GitCommand],
  data () {
    return {
      command: ['git fetch origin master']
    }
  },
  computed: {
    cherryStyle () {
      const marginL = this.mobileDevice ? '50px' : '70px'
      return {
        position: 'absolute',
        marginLeft: marginL
      }
    }
  },
  methods: {
    nextStep () {
      const xOffset = this.mobileDevice ? 20 : 0
      const t1 = new TimelineLite()
      const { cherry1, cherry2 } = this.$refs
      t1.set([cherry1, cherry2], { x: 0, y: 0, opacity: 0.5 })
        .to([cherry1, cherry2], 1, {
          x: -70 + xOffset,
          opacity: 1,
          ease: Back.easeInOut,
          onComplete: () => {
            this.next()
          }
        })
    },
    restartCommand (delay = 1000) {
      this._.delay(() => {
        const t1 = new TimelineLite()
        const { cherry1, cherry2 } = this.$refs
        t1.set([cherry1, cherry2], { opacity: 0 })

        this.step.splice(0, this.step.length)
        this.startCommand()
      }, delay)
    }
  }
}
</script>

<style scoped>
</style>
