<script setup lang="ts">
import { appName } from '~/constants'

useHead({
  title: appName,
})
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
