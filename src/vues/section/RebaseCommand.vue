import { TimelineLite } from "gsap"
<template>
  <div class="card bg-dark" style="min-height: 400px">
    <h5 class="card-header text-white">Git | Rebase</h5>
    <div class="card-body bash-console text-white">
      <p class="card-text">Copies commits on top of another branch without creating a commit, which keeps a linear
        history</p>
      <p class="card-text">Changes the history as new hashes are created for the copied commits</p>
      <div class="d-flex git-command-body">
        <div class="git-state-screen">
          <div class="git-pointer-screen" style="flex-basis: 30%;">
            <empty-space></empty-space>
            <git-head ref="head" :branch="'master'" :branch-only="true"></git-head>
          </div>
          <div class="git-commit-screen" style="flex-basis: 70%; flex-direction: row; align-items: flex-end">
            <div class="d-flex flex-column-reverse">
              <git-commit-box :hasArrow="false"></git-commit-box>
              <git-commit-box></git-commit-box>
              <empty-space :count="2"></empty-space>
            </div>
            <div class="d-flex flex-column-reverse">
              <empty-space :offset="10"></empty-space>
              <git-transition :boxOffset="-1" @startEnter="startEnter" @startLeave="startLeave">
                <div v-show="!complete">
                  <div class="d-flex flex-row">
                    <git-commit-box :border-color="borderColor"><span ref="commit1">{{commitId1}}</span></git-commit-box>
                    <git-head :branch="'dev'" :direction="'left'" style="padding-bottom: 20px"></git-head>
                  </div>
                  <git-commit-box :border-color="borderColor" :direction="'downLeft'"><span ref="commit2">{{commitId2}}</span></git-commit-box>
                </div>
              </git-transition>
              <empty-space></empty-space>
            </div>
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

import GitCommand from '@/mixins/git-command'
import { TimelineLite, visibility } from 'gsap'

// eslint-disable-next-line no-unused-vars
const gaspHack = [visibility]

export default {
  name: 'RebaseCommand',
  mixins: [GitCommand],
  data () {
    return {
      command: ['git rebase master'],
      borderColor: '#FF6E6E',
      commitId1: 'e45cb',
      commitId2: 'e3475'
    }
  },
  methods: {
    startLeave () {
      const t1 = new TimelineLite()
      t1.to(this.$data, 0.5, {
        borderColor: '#FFFFFF'
      }).to(this.$data, 0.5, {
        borderColor: '#FF6E6E'
      })
      const t2 = new TimelineLite()
      t2.to(this.$refs.commit1, 0.5, {
        opacity: 0,
        onComplete: () => { this.commitId1 = '76d12' }
      }).to(this.$refs.commit1, 0.5, {
        opacity: 1
      })
      const t3 = new TimelineLite()
      t3.to(this.$refs.commit2, 0.5, {
        opacity: 0,
        onComplete: () => { this.commitId2 = '3a2e2' }
      }).to(this.$refs.commit2, 0.5, {
        opacity: 1
      })
    },
    startEnter () {
      const t2 = new TimelineLite()
      t2.to(this.$refs.commit1, 0.5, {
        opacity: 0,
        onComplete: () => { this.commitId1 = 'e45cb' }
      }).to(this.$refs.commit1, 0.5, {
        opacity: 1
      })
      const t3 = new TimelineLite()
      t3.to(this.$refs.commit2, 0.5, {
        opacity: 0,
        onComplete: () => { this.commitId2 = 'e3475' }
      }).to(this.$refs.commit2, 0.5, {
        opacity: 1
      })
    }
  }
}
</script>

<style scoped>
</style>
