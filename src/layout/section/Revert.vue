<template>
  <!-- Contact Section-->
  <section class="page-section" id="revert">
    <div class="container">
      <!-- Contact Section Heading-->
      <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Revert</h2>
      <!-- Icon Divider-->
      <div class="divider-custom">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line"></div>
      </div>
      <!-- Revert Command --->
      <revert-command></revert-command>
    </div>
  </section>
</template>

<script>
import RevertCommand from './RevertCommand'

export default {
  name: 'Revert',
  components: { RevertCommand }
}
</script>

<style scoped>
</style>
