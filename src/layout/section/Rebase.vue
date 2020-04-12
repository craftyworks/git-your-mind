<template>
  <!-- Contact Section-->
  <section class="page-section" id="rebase">
    <!-- Contact Section Heading-->
    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Rebase</h2>
    <!-- Icon Divider-->
    <div class="divider-custom">
      <div class="divider-custom-line"></div>
      <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
      <div class="divider-custom-line"></div>
    </div>
    <!-- Rebase -->
    <rebase-command></rebase-command>
  </section>
</template>

<script>
import RebaseCommand from './RebaseCommand'

export default {
  name: 'Rebase',
  components: {
    RebaseCommand
  }
}
</script>

<style scoped>
</style>
