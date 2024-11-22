<script setup lang="ts">
import { repository } from "~/../package.json";
</script>

<template>
  <a class="inline-flex justify-center items-center dark:text-white" :href="repository.url" target="_blank">
    <div i-ri-github-line />
  </a>
</template>
