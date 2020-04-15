<template>
  <div class="d-flex flex-column">
    <div class="divider-custom">
      <div class="divider-custom-line"></div>
      <div class="divider-custom-icon">
        <img src="@/assets/img/friday-halloween-jason-movie.png" width="200px"/>
      </div>
      <div class="divider-custom-line"></div>
    </div>
    <div class="contact">
      <span class="text-dark">
        <i class="fas fa-envelope mr-1"></i>
        <a href="mailto:gitabout@gmail.com">gitabout@gmail.com</a>
      </span>
    </div>
    <div class="contact">
      <span class="text-dark">
        <i class="fab fa-github mr-1"></i>
        <a href="https://github.com/craftyworks/git-your-mind">https://github.com/craftyworks/git-your-mind</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>
<style scoped>
  .contact span {
    display: table-cell;
    width: 100%;
    padding-left: 5px;
    vertical-align: middle;
    text-align: left;
  }
</style>
