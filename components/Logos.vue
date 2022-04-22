<script setup lang="ts">
import { ElIcon } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
</script>

<template>
  <div class="display-logo" flex="~" gap-2 items-center>
    <img
      class="logo"
      src="https://element-plus.org/images/element-plus-logo.svg"
    />
    <el-icon><Plus /></el-icon>
    <NuxtLogo class="logo" />
  </div>
  <h2>
    <a target="_blank" href="https://element-plus.org/">Element Plus</a>
    With
    <a target="_blank" href="https://v3.nuxtjs.org/">NuxtJS</a>
  </h2>
</template>

<style>
.display-logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  max-height: 3rem;
}
</style>
