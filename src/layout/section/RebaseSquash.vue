<template>
  <div class="card bg-dark" style="min-height: 400px">
    <h5 class="card-header text-white">Git | Interactive Rebase - Squash</h5>
    <div class="card-body bash-console text-white">
      <p class="card-text">Squashes previous commit into one commit before rebasing</p>
      <div class="d-flex git-command-body">
        <div class="git-state-screen">
          <div class="git-pointer-screen">
            <empty-space :count="4"></empty-space>
          </div>
          <div class="git-commit-screen">
            <git-commit-box :hasArrow="false">i8fe5</git-commit-box>
            <div ref="commit0">
              <git-commit-box :file-name="'index.js'">ec5be</git-commit-box>
            </div>
            <git-transition :box-offset="1" @startEnter="startEnter" @startLeave="startLeave">
              <div v-show="!complete">
                <div class="d-flex flex-row">
                  <git-commit-box><span ref="commit1">{{commitId1}}</span></git-commit-box>
                  <git-head :direction="'left'" style="padding-bottom: 20px"></git-head>
                </div>
                <git-commit-box :file-name="'style.css'" :file-name2="fileName2"><span ref="commit2">{{commitId2}}</span></git-commit-box>
              </div>
            </git-transition>
          </div>
        </div>
        <git-bash style="min-height: 180px">
          <bash-command v-if="step[0]" :command="command[0]" @onComplete="nextStep">
            <p class="mb-0 ml-3"><span>pick</span><span class='ml-3'>ec5bef2 My first message!</span></p>
            <p class="mb-0 ml-3"><span ref="pick">{{mode}}</span><span class='ml-3'>e45cb9e My second message!</span></p>
            <p class="mb-0 ml-3"><span>pick</span><span class='ml-3'>3a2e28e My third message!</span></p>
          </bash-command>
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
  name: 'RebaseSquash',
  mixins: [GitCommand],
  data () {
    return {
      command: ['git rebase -i HEAD~3'],
      mode: 'pick',
      commitId1: '3a2e2',
      commitId2: 'e45cb',
      fileName2: ''
    }
  },
  methods: {
    nextStep () {
      const t1 = new TimelineLite()
      t1.to(this.$refs.pick, 0.5, {
        delay: 1,
        opacity: 0,
        onComplete: () => {
          this.mode = 'squash'
        }
      }).to(this.$refs.pick, 0.5, {
        opacity: 1,
        color: '#A4FFFF',
        onComplete: () => { this._.delay(this.next, 1000) }
      })
    },
    startLeave () {
      const t1 = new TimelineLite()
      t1.to(this.$refs.commit0, 0.5, { opacity: 0 })

      const t2 = new TimelineLite()
      t2.to(this.$refs.commit1, 0.5, {
        opacity: 0,
        onComplete: () => { this.commitId1 = '9ae53' }
      }).to(this.$refs.commit1, 0.5, { opacity: 1 })
      const t3 = new TimelineLite()
      t3.to(this.$refs.commit2, 0.5, {
        opacity: 0,
        onComplete: () => {
          this.commitId2 = 'c4ec9'
          this.fileName2 = 'index.js'
        }
      }).to(this.$refs.commit2, 0.5, {
        opacity: 1
      })
    },
    startEnter () {
      const t1 = new TimelineLite()
      t1.to(this.$refs.commit0, 0.5, { opacity: 1 })

      const t2 = new TimelineLite()
      t2.to(this.$refs.commit1, 0.5, {
        opacity: 0,
        onComplete: () => { this.commitId1 = '3a2e2' }
      }).to(this.$refs.commit1, 0.5, {
        opacity: 1
      })
      const t3 = new TimelineLite()
      t3.to(this.$refs.commit2, 0.5, {
        opacity: 0,
        onComplete: () => {
          this.commitId2 = 'e45cb'
          this.fileName2 = ''
          this.mode = 'pick'
        }
      }).to(this.$refs.commit2, 0.5, { opacity: 1 })
    }
  }
}
</script>

<style scoped>

</style>
