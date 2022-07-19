<script setup>
import { ElConfigProvider, ID_INJECTION_KEY } from 'element-plus';

provide(ID_INJECTION_KEY, {
  prefix: 100,
  current: 0,
})

const dark = useDark();
watch(dark, () => {
  useHead({
    htmlAttrs: {
      class: dark.value ? 'dark' : '',
    },
  });
});

</script>

<template>
  <ElConfigProvider namespace="fm">
    <NuxtPage />
  </ElConfigProvider>
</template>
