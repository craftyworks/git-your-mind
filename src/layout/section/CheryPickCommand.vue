<template>
  <div class="card bg-dark" style="min-height: 400px">
    <h5 class="card-header text-white">Git | Cherry-picking</h5>
    <div class="card-body bash-console text-white">
      <p class="card-text">Creates a new commit with the changes that the cherry-picked commit introduced.</p>
      <p class="card-text">By default, Git will only apply the changes if the current branch does not have these changes
        in order to prevent an empty commit.</p>
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
            <git-commit-box :hasArrow="false"></git-commit-box>
            <div class="d-flex flex-row">
              <git-commit-box></git-commit-box>
              <git-commit-box :border-color="'#FF6E6E'" :direction="'downLeft'"></git-commit-box>
            </div>
            <div class="d-flex flex-row">
              <git-commit-box></git-commit-box>
              <git-commit-box :border-color="'#FF6E6E'" :file-name="'index.js'">76d12</git-commit-box>
              <div ref="cherry" class="position-absolute" style="margin-left: 70px">
                <git-commit-box :border-color="'#FF6E6E'" :has-arrow="false" :file-name="'index.js'">76d12</git-commit-box>
              </div>
            </div>
            <slide-y-down-transition :duration="500">
              <git-commit-box v-show="complete" file-name="index.js"></git-commit-box>
            </slide-y-down-transition>
          </div>
        </div>
        <git-bash style="min-height: 150px">
          <bash-command v-if="step[0]" :command="command[0]" @onComplete="nextStep" :hasNext="true"/>
          <bash-command v-if="step[1]" :command="command[1]" @onComplete="restartCommand">
            <p class="mb-0">Nothing to commit</p>
          </bash-command>
        </git-bash>
      </div>
    </div>
  </div>
</template>

<script>

import { SlideYDownTransition } from 'vue2-transitions'
import GitCommand from '@/mixins/git-command'
import { TimelineLite, Back, visibility } from 'gsap'

// eslint-disable-next-line no-unused-vars
const gaspHack = [visibility]

export default {
  name: 'CherryPickCommand',
  components: { SlideYDownTransition },
  mixins: [GitCommand],
  data () {
    return {
      command: ['git cherry-pick 76d12', 'git cherry-pick 76d12']
    }
  },
  methods: {
    nextStep () {
      const t1 = new TimelineLite()
      t1.set(this.$refs.cherry, { x: 0, y: 0, opacity: 1 })
        .to(this.$refs.cherry, 1, {
          x: -70,
          y: -90,
          opacity: 0.7,
          ease: Back.easeInOut,
          onComplete: () => {
            this.next()
          }
        })
        .to(this.$refs.cherry, 1, { opacity: 0 })
    }
  }
}
</script>

<style scoped>
</style>
