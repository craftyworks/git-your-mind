import { Expo } from "gsap"
<template>
  <!-- Contact Section-->
  <section class="page-section" id="contact">
    <div class="container">
      <!-- Contact Section Heading-->
      <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Reset</h2>
      <!-- Icon Divider-->
      <div class="divider-custom">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line"></div>
      </div>
      <div class="card bg-dark" style="min-height: 400px">
        <div class="container position-relative" style="width:400px; height: 400px;">
            <git-head ref="head" :left="50" :top="35"></git-head>
            <git-commit-box style="left: 165px; top: 20px">9e78i</git-commit-box>
            <git-commit-box style="left: 165px; top: 110px">035cc</git-commit-box>
            <git-commit-box style="left: 165px; top: 200px">ec5be</git-commit-box>
            <git-commit-box style="left: 165px; top: 290px">i8fe5</git-commit-box>
        </div>
      </div>
      <!-- Soft Reset -->
      <div class="card bg-dark" style="min-height: 350px">
        <h5 class="card-header text-white">Git | Soft reset</h5>
        <div class="card-body bash-console text-white">
          <p class="card-text">Points HEAD to the specified commit</p>
          <p class="card-text">Keeps change that have been made since the new commit that HEAD points to, and keeps the
            modifications in the working directory</p>
          <bash-command v-if="soft.step[0]" :command="soft.command[0]"
                        @onComplete="soft.next" :hasNext="true"/>
          <bash-command v-if="soft.step[1]" :command="soft.command[1]"
                        @onComplete="soft.next" :hasNext="true">
            <p class="mb-0">Changes to be committed:</p>
            <p class="ml-3 mb-0">new file: index.js</p>
            <p class="ml-3 mb-0">new file: styles.css</p>
          </bash-command>
          <bash-command v-if="soft.step[2]" @onComplete="restartReset"/>
        </div>
      </div>
      <!-- Icon Divider-->
      <div class="divider-custom">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line"></div>
      </div>
      <!-- Hard Reset -->
      <div class="card bg-dark" style="min-height: 350px">
        <h5 class="card-header text-white">Git | Hard reset</h5>
        <div class="card-body bash-console text-white">
          <p class="card-text">Points HEAD to the specified commit</p>
          <p class="card-text">Discard changes that have been made since the new commit that <strong>HEAD</strong>
            points to,
            and deletes changes in working copy</p>
          <bash-command v-if="hard.step[0]" :command="hard.command[0]"
                        @onComplete="hard.step.push(true)" :hasNext="true"/>
          <bash-command v-if="hard.step[1]" :command="hard.command[1]"
                        @onComplete="hard.step.push(true)" :hasNext="true">
            <p class="mb-0">Nothing to commit</p>
          </bash-command>
          <bash-command v-if="hard.step[2]"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BashCommand from '@/components/BashCommand'
import GitCommitBox from '@/components/GitCommitBox'
import GitHead from '@/components/GitHead'

import { TimelineLite, Back } from 'gsap'

export default {
  name: 'Reset',
  components: { BashCommand, GitHead, GitCommitBox },
  data () {
    return {
      soft: {
        command: ['git reset --soft HEAD~2', 'git status'],
        step: [],
        next: () => this.soft.step.push(true)
      },
      hard: {
        command: ['git reset --hard HEAD~2', 'git status'],
        step: [],
        next: () => this.hard.step.push(true)
      }
    }
  },
  methods: {
    startReset () {
      this._.delay(() => {
        this.soft.step.push(true)
        this.hard.step.push(true)
      }, 1000)
    },
    restartReset (delay = 5000) {
      this._.delay(() => {
        this.soft.step = []
        this.hard.step = []
        this.startReset()
      }, delay)
    }
  },
  mounted () {
    const head = this.$refs.head.$el
    const timeline = new TimelineLite({
      onComplete: () => this._.delay(() => timeline.restart(), 1000)
    })
    timeline.to(head, 1, { y: 175, rotation: 0, ease: Back.easeInOut })
    this.startReset()
  }
}
</script>

<style scoped>
  .bash-console {
    background-color: #282a36;
  }
</style>
