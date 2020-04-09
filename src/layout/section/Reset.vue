<template>
  <!-- Section-->
  <section class="page-section" id="reset">
    <div class="container">
      <!-- Section Heading-->
      <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Reset</h2>
      <!-- Icon Divider-->
      <div class="divider-custom">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line"></div>
      </div>
      <!-- Soft Reset -->
      <reset-soft></reset-soft>
      <!-- Icon Divider-->
      <div class="divider-custom"><div class="divider-custom-line"></div></div>
      <!-- Hard Reset -->
      <reset-hard></reset-hard>
    </div>
  </section>
</template>

<script>
import ResetSoft from './ResetSoft'
import ResetHard from './ResetHard'

export default {
  name: 'Reset',
  components: {
    ResetSoft,
    ResetHard
  }
}
</script>

<style scoped>
</style>
