<template>
  <div>
    <!-- Footer-->
    <footer class="footer app-footer text-center">
      <div class="container">
        <div class="row">
          <div class="col-md-8 offset-md-2 col-sm-12">
            <div class="card bg-dark text-left text-dark app-card">
              <div class="card-header text-white">Based on the [Dev.to] post of Lydia Hallie.</div>
              <div class="card-body bg-light">
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
                <a href="https://dev.to/" target="_blank">
                  <img class="bg-dark float-right rotate330 dev-logo" src="@/assets/img/dev-logo.svg" width="40px"
                       height="30px">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- Copyright Section-->
    <section class="copyright py-4 text-center text-white">
      <div class="container">
        <small>Git About.com</small>
      </div>
    </section>
    <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes)-->
    <div v-show="showScrollTop" class="scroll-to-top d-lg-none position-fixed">
      <a class="js-scroll-trigger d-block text-center text-white rounded" v-smooth-scroll href="#page-top">
        <i class="fa fa-chevron-up"></i>
      </a>
    </div>
  </div>
</template>

<script>
  /* eslint indent: 0 */
  import { mapState } from 'vuex'

  export default {
    name: 'AppFooter',
    computed: mapState(['showScrollTop'])
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
