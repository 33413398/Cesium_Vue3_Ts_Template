<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/BigScreen">大屏布局模板</RouterLink>
    <RouterLink to="/ManagementClient">管理系统布局模板</RouterLink>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1rem;

  a {
    font-size: .3rem;
    margin-right: 1rem;
  }
}
</style>
