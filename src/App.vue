<template>

  <div id="app">
    <app-header></app-header>
    <div class="app-container">
      <merge></merge>
      <rebase></rebase>
      <reset></reset>
      <revert></revert>
      <cherry-pick></cherry-pick>
      <fetch></fetch>
      <pull></pull>
      <reflog></reflog>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Vues from './vues'

import { mapMutations } from 'vuex'

export default {
  name: 'App',
  components: Vues,
  methods: {
    onScroll () {
      // 스크롤이 생기면 Top 으로 스크롤 시키는 버튼을 보여준다.
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      this.showScrollTop(scrollTop > 300)

      // 스크롤이 생기면 네비게이션바 높이를 줄여준다.
      if (scrollTop > 100) {
        this.shrinkNavbar()
      } else {
        this.expandNavbar()
      }
    },
    onSize () {
      this.mutate({ name: 'mobileDevice', value: window.innerWidth <= this.CONST.MOBILE_WIDTH })
    },
    ...mapMutations(['shrinkNavbar', 'expandNavbar', 'showScrollTop', 'mutate'])
  },
  mounted () {
    window.addEventListener('scroll', this._.debounce(this.onScroll, 300))
    window.addEventListener('resize', this._.debounce(this.onSize, 300))
    this.onSize()
  }
}
</script>

<style>
  @import './assets/css/styles.css';
  @import './assets/css/app.css';
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
