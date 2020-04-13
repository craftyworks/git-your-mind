<template>
  <!-- Contact Section-->
  <section class="page-section" id="cherry">
    <!-- Contact Section Heading-->
    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Cherry-Picking</h2>
    <!-- Icon Divider-->
    <div class="divider-custom">
      <div class="divider-custom-line"></div>
      <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
      <div class="divider-custom-line"></div>
    </div>
    <!-- Cherry Pick Command --->
    <chery-pick-command></chery-pick-command>
  </section>
</template>

<script>
import CheryPickCommand from './CheryPickCommand'

export default {
  name: 'Revert',
  components: { CheryPickCommand }
}
</script>

<style scoped>
</style>
