<template>
  <div>
    <!-- Navigation-->
    <navigation></navigation>

    <!-- Masthead-->
    <header class="masthead bg-dark text-white text-center">
      <div class="app-container d-flex align-items-center flex-column">
        <div class="d-lg-none">
          <!-- Masthead Heading-->
          <h1 class="masthead-heading text-uppercase mb-0">
            Git Commands
          </h1>
          <h2 class="masthead-subheading">visualized</h2>
          <!-- Icon Divider-->
          <div class="divider-custom divider-light">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon">
              <img class="masthead-avatar" src="@/assets/img/friday-halloween-jason-movie.png"/>
            </div>
            <div class="divider-custom-line"></div>
          </div>
        </div>
        <div class="d-none d-lg-block">
          <banner-command></banner-command>
        </div>
        <lydia-box></lydia-box>
      </div>
    </header>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import LydiaBox from './components/LydiaBox'
import BannerCommand from './section/BannerCommand'

export default {
  name: 'AppHeader',
  components: { Navigation, LydiaBox, BannerCommand }
}
</script>

<style scoped>

</style>
