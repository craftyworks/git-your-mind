<template>
  <div class="card bg-dark" style="min-height: 400px">
    <h5 class="card-header text-white">Git | Pulling</h5>
    <div class="card-body bash-console text-white">
      <p class="card-text">Downloads content from a remote branch or repository like <strong>git fetch</strong> would
        do,
        and automatically <strong>merge</strong>s the new changes.</p>
      <div class="d-flex git-command-body">
        <div class="git-state-screen">
          <div class="git-pointer-screen" style="flex-basis: 30%;">
            <empty-space></empty-space>
            <git-transition :boxOffset="-3">
              <git-head ref="head" v-show="!complete" :branch="'master'">Head</git-head>
            </git-transition>
            <empty-space :count="2"></empty-space>
          </div>
          <div class="git-commit-screen flex-row" style="align-items: flex-end;">
            <div class="d-flex flex-column-reverse">
              <git-commit-box :hasArrow="false">e35cc</git-commit-box>
              <git-commit-box>a8fe5</git-commit-box>
              <div ref="box" style="opacity: 0">
                <git-commit-box>
                  <template v-slot:arrow="slotProps">
                    <merge-arrow :width="slotProps.boxSize" :height="arrowHeight"
                                 :show-down-right-arrow="showDownRightArrow"></merge-arrow>
                  </template>
                </git-commit-box>
              </div>
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
import { TimelineLite, Expo, visibility } from 'gsap'
import MergeArrow from './MergeArrow'

// eslint-disable-next-line no-unused-vars
const gaspHack = [visibility]

export default {
  name: 'PullCommand',
  mixins: [GitCommand],
  components: { MergeArrow },
  data () {
    return {
      command: ['git pull origin master'],
      arrowHeight: 20,
      showDownRightArrow: false
    }
  },
  computed: {
    offset () {
      const boxSize = this.mobileDevice ? this.CONST.MOBILE.SQUARE_BOX_WIDTH : this.CONST.SCREEN.SQUARE_BOX_WIDTH
      const margin = 30
      return 2 * (boxSize + margin) + 20
    }
  },
  methods: {
    nextStep () {
      const t1 = new TimelineLite()
      t1.to(this.$refs.box, 0.5, {
        opacity: 1,
        onComplete: () => {
          this.next()
        }
      }).to(this.$data, 1, {
        arrowHeight: this.offset,
        ease: Expo.easeInOut,
        onComplete: () => {
          this.showDownRightArrow = true
        }
      })
    },
    restartCommand (delay = 1000) {
      this._.delay(() => {
        const t1 = new TimelineLite()
        t1.set(this.$refs.box, {
          opacity: 0
        })
        this.arrowHeight = 20
        this.step.splice(0, this.step.length)
        this.startCommand()
      }, delay)
    }
  }
}
</script>

<style scoped>
</style>
