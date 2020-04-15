<template>
  <div>
    <!-- Footer-->
    <footer class="footer app-footer text-center">
      <lydia-box></lydia-box>
    </footer>
    <!-- Copyright Section-->
    <section class="copyright py-4 text-center text-white">
      <div class="container">
        <div class="row">
          <div class="col-4 text-left">
            <small @click="openModal('Attribution')">
              Attribution
            </small>
          </div>
          <div class="col-4">
            <small>Git About.com</small>
          </div>
          <div class="col-4">
            <small @click="openModal('Contact')">
              Contact
            </small>
          </div>
        </div>
      </div>
    </section>
    <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes)-->
    <div v-show="showScrollTop" class="scroll-to-top d-lg-none position-fixed">
      <a class="js-scroll-trigger d-block text-center text-white rounded" v-smooth-scroll href="#page-top">
        <i class="fa fa-chevron-up"></i>
      </a>
    </div>
    <!-- Modal -->
    <modal :show.sync="showModal" :title="modalName" :close-button="false">
      <component :is="modalObject"></component>
    </modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import LydiaBox from './components/LydiaBox'

export default {
  name: 'AppFooter',
  components: { LydiaBox },
  data () {
    return {
      showModal: false,
      modalName: 'Attribution'
    }
  },
  methods: {
    openModal (name) {
      this.modalName = name
      this.showModal = true
    }
  },
  computed: {
    modalObject () {
      return () => import('./modal/' + this.modalName)
    },
    ...mapState(['showScrollTop'])
  }
}
</script>

<style scoped>
</style>
