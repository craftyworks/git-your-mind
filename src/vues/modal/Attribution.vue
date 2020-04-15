<template>
  <div class="d-flex flex-column">
    <!-- Icon Divider-->
    <div class="divider-custom">
      <div class="divider-custom-line"></div>
      <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
      <div class="divider-custom-line"></div>
    </div>
    <div class="attribution">
      <a href="https://icon-icons.com/icon/friday-halloween-jason-movie/113258">
        <img class="float-left" src="@/assets/img/friday-halloween-jason-movie.png" width="60px"/>
      </a>
      <span>by <a href="http://laurareen.com/">Laura Reen</a> licensed under
        <a href="https://creativecommons.org/licenses/by/4.0/">CC Atribution</a>
      </span>
    </div>
    <div class="attribution">
      <a href="https://icon-icons.com/icon/file-type-git/130581">
        <img class="float-left" src="@/assets/img/git-icon.png" width="60px">
      </a>
      <span>by <a href="https://github.com/robertohuertasm/">Roberto Huertas</a> licensed under
        <a href="https://creativecommons.org/licenses/by/4.0/">CC Atribution</a>
      </span>
    </div>
    <div class="attribution">
      <a href="https://www.iconfinder.com/AlexAPR">
        <img class="float-left" src="@/assets/img/git-box-icon.svg" width="60px">
      </a>
      <span>by <a href="https://github.com/robertohuertasm/">Alexandru Prunici</a> licensed under
        <a href="https://creativecommons.org/licenses/by/4.0/">CC Atribution</a>
      </span>
    </div>
    <div class="bg-dark text-left text-dark app-card">
      <div class="card-body bg-light">
        <a href="https://dev.to/lydiahallie" target="_new">
          <img class="rounded-circle float-left mr-2" width="40"
               src="https://res.cloudinary.com/practicaldev/image/fetch/s--R9eLPWdR--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/198900/f497603e-77e4-4cfc-ae1a-a9214062aac4.jpeg">
        </a>
        <a href="https://dev.to/lydiahallie/cs-visualized-useful-git-commands-37p1">
          <h4 class="card-title mb-1 mt-1 text-dark">🌳🚀 CS Visualized : Useful Git Commands</h4>
        </a>
        <a href="https://dev.to/">
          <img class="bg-dark float-right rotate330 dev-logo mt-1" src="@/assets/img/dev-logo.svg" width="40px"
               height="30px">
        </a>
        <a href="https://dev.to/lydiahallie" target="_new">
          <p class="card-text text-dark mb-0" style="margin-left: 40px">Lydia Hallie・Apr 1, 2020</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Attribution'
}
</script>
<style scoped>
  .attribution {
    display: table;
  }

  .attribution span {
    display: table-cell;
    width: 100%;
    padding-left: 5px;
    vertical-align: middle;
    text-align: left;
  }

  .app-card {
    margin-top: 40px;
  }

  .app-card .card-title {
    font-size: 1rem;
  }
</style>
