<template>
  <div>
    <!-- Footer-->
    <footer class="footer text-center">
      <div class="container">
        <div class="row">
          <!-- Footer Location-->
          <div class="col-lg-4 mb-5 mb-lg-0">
            <h4 class="text-uppercase mb-4">Location</h4>
            <p class="lead mb-0">2215 John Daniel Drive<br/>Clark, MO 65243
            </p>
          </div>
          <!-- Footer About Text-->
          <div class="col-lg-4">
            <h4 class="text-uppercase mb-4">About Freelancer</h4>
            <p class="lead mb-0">Freelance is a free to use, MIT licensed Bootstrap theme created by<a
              href="http://startbootstrap.com">Start Bootstrap</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
    <!-- Copyright Section-->
    <section class="copyright py-4 text-center text-white">
      <div class="container">
        <small>Copyright © Your Website 2020</small>
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

</style>
