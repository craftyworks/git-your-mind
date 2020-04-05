<template>
  <!-- Portfolio Section-->
  <section class="page-section portfolio" id="portfolio">
    <div class="container">
      <!-- Portfolio Section Heading-->
      <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
      <!-- Icon Divider-->
      <div class="divider-custom">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line"></div>
      </div>
      <!-- Portfolio Grid Items-->
      <div class="row">
        <!-- Portfolio Item -->
        <div v-for="modal in modals" :key="modal.id" class="col-md-6 col-lg-4 mb-5">
          <div class="portfolio-item mx-auto" data-toggle="modal" @click="modal.show = true">
            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" :src="modal.img" alt=""/>
          </div>
        </div>
      </div>
    </div>
    <!-- Portfolio Modals-->
    <!-- Portfolio Modal 1-->
    <modal v-for="modal in modals" :key="modal.id" :id="modal.id" :show.sync="modal.show"
           :title="modal.title">
      <!-- Portfolio Modal - Image-->
      <img class="img-fluid rounded mb-5" :src="modal.img" alt=""/>
      <!-- Portfolio Modal - Text-->
      <p class="mb-5">{{modalText}}</p>
    </modal>

  </section>
</template>

<script>
import Modal from '@/components/Modal'

export default {
  name: 'Portfolio',
  components: { Modal },
  data () {
    return {
      modalText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda' +
        ' ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae?' +
        ' Reprehenderit soluta, eos quod consequuntur itaque. Nam.',
      modals: [
        /* eslint quotes: 0 */
        { id: 'portfolioModal1', show: false, title: 'Joe Cavin', img: require(`@/assets/img/portfolio/cabin.png`) },
        { id: 'portfolioModal2', show: false, title: 'Tasty Cake', img: require(`@/assets/img/portfolio/cake.png`) },
        { id: 'portfolioModal3', show: false, title: 'Circus Tent', img: require(`@/assets/img/portfolio/circus.png`) },
        { id: 'portfolioModal4', show: false, title: 'Controller', img: require(`@/assets/img/portfolio/game.png`) },
        { id: 'portfolioModal5', show: false, title: 'Locked Safe', img: require(`@/assets/img/portfolio/safe.png`) },
        { id: 'portfolioModal6', show: false, title: 'Submarine', img: require(`@/assets/img/portfolio/submarine.png`) }
      ]
    }
  }
}
</script>
<style scoped>

</style>
