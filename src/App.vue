<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import CustomHeader from '@/components/layouts/Header.vue'
</script>

<template>
  <custom-header />

  <main class="main">
    <div class="content-area">
      <RouterView />
    </div>
  </main>
</template>

<style lang="scss" scoped>

</style>
