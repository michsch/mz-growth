<script lang="ts" setup>

const navItems = [
  {
    name: 'home',
    label: 'Home',
  },
  {
    name: 'about',
    label: 'About',
  },
  {
    name: 'hero',
    label: 'Hero',
  },
]
</script>

<template>
  <nav class="nav-main">
    <ul class="nav-main-list">
      <li class="nav-main-list-item" v-for="(item, index) in navItems" :key="index">
        <RouterLink :to="item">{{ item.label }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.nav-main-list {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
