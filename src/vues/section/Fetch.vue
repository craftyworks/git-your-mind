<template>
  <!-- Contact Section-->
  <section class="page-section" id="fetch">
    <!-- Contact Section Heading-->
    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Fetching</h2>
    <!-- Icon Divider-->
    <div class="divider-custom">
      <div class="divider-custom-line"></div>
      <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
      <div class="divider-custom-line"></div>
    </div>
    <!-- Fetch Command --->
    <fetch-command></fetch-command>
  </section>
</template>

<script>
import FetchCommand from './FetchCommand'

export default {
  name: 'Revert',
  components: { FetchCommand }
}
</script>

<style scoped>
</style>
