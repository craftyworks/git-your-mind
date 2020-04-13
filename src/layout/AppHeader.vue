<template>
  <div>
    <!-- Navigation-->
    <navigation></navigation>

    <!-- Masthead-->
    <header class="masthead bg-dark text-white text-center">
      <div class="app-container d-flex align-items-center flex-column">
        <!-- Masthead Heading-->

        <h1 class="masthead-heading text-uppercase mb-0">
          <img class="float-left mr-2" src="@/assets/img/git-icon-512.svg" width="50px">Git Commands
        </h1>
        <h2 class="">visualized</h2>
        <!-- Icon Divider-->
        <div class="divider-custom divider-light">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <img class="mb-3" src="@/assets/img/friday-halloween-jason-movie.png" style="width: 200px;" alt=""/>
          </div>
          <div class="divider-custom-line"></div>
        </div>
        <div class="app-container">
          <div class="row">
            <div class="col-md-10 offset-md-1">
              <div class="card bg-dark text-left text-dark app-card">
                <div class="card-body bg-light">
                  <a href="https://dev.to/" target="_blank">
                    <img class="bg-dark float-right rotate330 dev-logo mt-1" src="@/assets/img/dev-logo.svg" width="40px" height="30px">
                  </a>
                  <a href="https://dev.to/lydiahallie" target="_new">
                    <img class="rounded-circle float-left mr-2" width="40"
                         src="https://res.cloudinary.com/practicaldev/image/fetch/s--R9eLPWdR--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/198900/f497603e-77e4-4cfc-ae1a-a9214062aac4.jpeg">
                  </a>
                  <a href="https://dev.to/lydiahallie/cs-visualized-useful-git-commands-37p1" target="_blank">
                    <h4 class="card-title mb-1 mt-1 text-dark">🌳🚀 CS Visualized: Useful Git Commands</h4>
                  </a>
                  <a href="https://dev.to/lydiahallie" target="_new">
                    <p class="card-text text-dark mb-0" style="margin-left: 40px">Lydia Hallie・Apr 1, 2020</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
  /* eslint indent: 0 */
  export default {
    name: 'AppHeader'
  }
</script>

<style scoped>
  a, a:hover, a:active, a:visited {
    text-decoration: none;
  }

  .app-card {
    border: 2px solid #000000;
    box-shadow: 5px 6px 0px #000000;
  }

  .dev-logo {
    padding: 0px 7px 0px 9px;
    border-radius: 3px;
  }
</style>
