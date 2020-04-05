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
      <!-- Soft Reset -->
      <div class="card bg-dark" style="min-height: 350px">
        <h5 class="card-header text-white">Git | Soft reset</h5>
        <div class="card-body bash-console text-white">
          <p class="card-text">Points HEAD to the specified commit</p>
          <p class="card-text">Keeps change that have been made since the new commit that HEAD points to, and keeps the
            modifications in the working directory</p>
          <bash-command v-if="soft.step[0]" id="soft1" :command="soft.command[0]"
                        @onComplete="soft.step.push(true)" :hasNext="true"/>
          <bash-command v-if="soft.step[1]" id="soft2" :command="soft.command[1]"
                        @onComplete="soft.step.push(true)" :hasNext="true">
            <p class="mb-0">Changes to be committed:</p>
            <p class="ml-3 mb-0">new file: index.js</p>
            <p class="ml-3 mb-0">new file: styles.css</p>
          </bash-command>
          <bash-command v-if="soft.step[2]" id="soft3" @onComplete="restartReset"/>
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
          <bash-command v-if="hard.step[0]" id="hard1" :command="hard.command[0]"
                        @onComplete="hard.step.push(true)" :hasNext="true"/>
          <bash-command v-if="hard.step[1]" id="hard2" :command="hard.command[1]"
                        @onComplete="hard.step.push(true)" :hasNext="true">
            <p class="mb-0">Nothing to commit</p>
          </bash-command>
          <bash-command v-if="hard.step[2]" id="hard3"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BashCommand from '@/components/BashCommand'

export default {
  name: 'Reset',
  components: { BashCommand },
  data () {
    return {
      soft: {
        command: ['git reset --soft HEAD~2', 'git status'],
        step: []
      },
      hard: {
        command: ['git reset --hard HEAD~2', 'git status'],
        step: []
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
    restartReset (delay = 10000) {
      this._.delay(() => {
        this.soft.step = []
        this.hard.step = []
        this.startReset()
      }, delay)
    }
  },
  mounted () {
    this.startReset()
  }
}
</script>

<style scoped>
  .bash-console {
    background-color: #282a36;
  }
</style>
