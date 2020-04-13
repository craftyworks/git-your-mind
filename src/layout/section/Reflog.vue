<template>
  <!-- Contact Section-->
  <section class="page-section" id="reflog">
    <!-- Contact Section Heading-->
    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Reflog</h2>
    <!-- Icon Divider-->
    <div class="divider-custom">
      <div class="divider-custom-line"></div>
      <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
      <div class="divider-custom-line"></div>
    </div>
    <!-- Reflog Command --->
    <reflog-command></reflog-command>
    <!-- Icon Divider-->
    <div class="divider-custom">
      <div class="divider-custom-line"></div>
    </div>
    <!-- Reflog Command --->
    <reflog-command2></reflog-command2>
  </section>
</template>

<script>
import ReflogCommand from './ReflogCommand'
import ReflogCommand2 from './ReflogCommand2'

export default {
  name: 'Reflog',
  components: { ReflogCommand, ReflogCommand2 }
}
</script>

<style scoped>
</style>
