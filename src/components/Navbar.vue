<template>
  <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">Git Your Mind</a>
      <button class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
              type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive"
              :aria-expanded="expanded" @click="expanded = !expanded" aria-label="toggle navigation">menu <i
        class="fas fa-bars"></i></button>
      <collapse-transition>
        <div class="collapse navbar-collapse show" v-show="expanded" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mx-0 mx-lg-1">
              <a class="nav-link py-3 px-0 px-lg-3 rounded" v-smooth-scroll href="#portfolio" @click="expanded=false">Portfolio</a>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <a class="nav-link py-3 px-0 px-lg-3 rounded" v-smooth-scroll href="#about" @click="expanded=false">About</a>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <a class="nav-link py-3 px-0 px-lg-3 rounded" v-smooth-scroll href="#contact" @click="expanded=false">Contact</a>
            </li>
          </ul>
      </div>
      </collapse-transition>
    </div>
  </nav>
</template>

<script>
import { CollapseTransition } from 'vue2-transitions'

export default {
  name: 'Navigation',
  components: {
    CollapseTransition
  },
  data () {
    return {
      expanded: false
    }
  }
}
</script>

<style scoped>
</style>
