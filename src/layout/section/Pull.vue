<template>
  <!-- Contact Section-->
  <section class="page-section" id="pull">
    <!-- Contact Section Heading-->
    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Pulling</h2>
    <!-- Icon Divider-->
    <div class="divider-custom">
      <div class="divider-custom-line"></div>
      <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
      <div class="divider-custom-line"></div>
    </div>
    <!-- Pull Command --->
    <pull-command></pull-command>
  </section>
</template>

<script>
import PullCommand from './PullCommand'

export default {
  name: 'Revert',
  components: { PullCommand }
}
</script>

<style scoped>
</style>
