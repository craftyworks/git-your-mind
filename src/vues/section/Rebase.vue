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
    <!-- Icon Divider-->
    <div class="divider-custom">
      <div class="divider-custom-line"></div>
    </div>
    <!-- Rebase drop-->
    <rebase-drop></rebase-drop>
    <!-- Icon Divider-->
    <div class="divider-custom">
      <div class="divider-custom-line"></div>
    </div>
    <!-- Rebase squash -->
    <rebase-squash></rebase-squash>
  </section>
</template>

<script>
import RebaseCommand from './RebaseCommand'
import RebaseDrop from './RebaseDrop'
import RebaseSquash from './RebaseSquash'

export default {
  name: 'Rebase',
  components: {
    RebaseCommand, RebaseDrop, RebaseSquash
  }
}
</script>

<style scoped>
</style>
