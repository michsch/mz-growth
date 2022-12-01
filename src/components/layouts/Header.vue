<script lang="ts" setup>
import logo from '@/assets/images/sparhandy_logo.svg'
import NavMain from '@/components/elements/NavMain.vue'
</script>

<template>
<header class="page-header">
  <div class="content-area">
    <figure class="logo-container">
      <img :src="logo" alt="Sparhandy">
    </figure>
    <nav-main />
  </div>
</header>
</template>

<style lang="scss" scoped>
.page-header {
  height: 120px;
}

.content-area {
  display: flex;
}

.logo-container {
  margin: 0;
  width: 20%;
}

.logo-container {
  max-width: 100%;
  max-height: 100%;
}
</style>
