<template>
  <div>
    <!-- Footer-->
    <footer class="footer app-footer text-center">
      <lydia-box></lydia-box>
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
import { mapState } from 'vuex'
import LydiaBox from './components/LydiaBox'

export default {
  name: 'AppFooter',
  components: { LydiaBox },
  computed: mapState(['showScrollTop'])
}
</script>

<style scoped>
</style>
