<template>
  <div class="card git-bash-screen">
    <div class="card-header">
      <i class="fas fa-circle" style="color: #FF6E6E; margin: 0px 3px"></i>
      <i class="fas fa-circle" style="color: #FFFFA5; margin: 0px 3px"></i>
      <i class="fas fa-circle" style="color: #69FF94; margin: 0px 3px"></i>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GitBash'
}
</script>

<style scoped>

  .git-bash-screen {
    margin: 5px 0px;
  }
  .git-bash-screen > .card-header {
    padding: 5px 10px;
  }

  .git-bash-screen > .card-body {
    flex: 1;
    overflow: auto;
    color: #6272A4;
    background-color: #282A36;
  }
</style>
