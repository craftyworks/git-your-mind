<template>
  <!-- Contact Section-->
  <section class="page-section" id="merge">
    <!-- Contact Section Heading-->
    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Merge</h2>
    <!-- Icon Divider-->
    <div class="divider-custom">
      <div class="divider-custom-line"></div>
      <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
      <div class="divider-custom-line"></div>
    </div>
    <!-- Merge Command --->
    <merge-fast-forward></merge-fast-forward>
    <!-- Icon Divider-->
    <div class="divider-custom">
      <div class="divider-custom-line"></div>
    </div>
    <merge-no-fast-forward></merge-no-fast-forward>
    <!-- Icon Divider-->
    <div class="divider-custom">
      <div class="divider-custom-line"></div>
    </div>
    <merge-conflict></merge-conflict>
  </section>
</template>

<script>
import MergeFastForward from './MergeFastForward'
import MergeNoFastForward from './MergeNoFastForward'
import MergeConflict from './MergeConflict'

export default {
  name: 'Merge',
  components: { MergeFastForward, MergeNoFastForward, MergeConflict }
}
</script>

<style scoped>
</style>
