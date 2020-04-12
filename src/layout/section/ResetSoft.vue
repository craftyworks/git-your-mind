<template>
  <div class="card bg-dark" style="min-height: 400px">
    <h5 class="card-header text-white">Git | Soft reset </h5>
    <div class="card-body bash-console text-white">
      <p class="card-text">Points HEAD to the specified commit</p>
      <p class="card-text">Keeps change that have been made since the new commit that HEAD points to, and keeps the
        modifications in the working directory</p>
      <div class="d-flex git-command-body">
        <div class="git-state-screen">
          <div class="git-pointer-screen">
            <empty-space :count="3"></empty-space>
            <git-transition :boxOffset="2">
              <git-head ref="head" v-show="!complete">Head</git-head>
            </git-transition>
          </div>
          <div class="git-commit-screen">
            <git-commit-box :hasArrow="false"></git-commit-box>
            <git-commit-box></git-commit-box>
            <git-commit-box></git-commit-box>
            <git-commit-box></git-commit-box>
          </div>
        </div>
        <git-bash style="min-height: 200px">
          <bash-command v-if="step[0]" :command="command[0]" @onComplete="next" :hasNext="true"/>
          <bash-command v-if="step[1]" :command="command[1]" @onComplete="next" :hasNext="true">
            <p class="mb-0">Changes to be committed:</p>
            <p class="ml-3 mb-0">new file: index.js</p>
            <p class="ml-3 mb-0">new file: styles.css</p>
          </bash-command>
          <bash-command v-if="step[2]" @onComplete="restartCommand"/>
        </git-bash>
      </div>
    </div>
  </div>
</template>

<script>
import GitCommand from '@/mixins/git-command'

export default {
  name: 'ResetSoft',
  mixins: [GitCommand],
  data () {
    return {
      command: ['git reset --soft HEAD~2', 'git status']
    }
  }
}
</script>

<style scoped>

</style>
