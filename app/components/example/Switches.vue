<script setup lang="ts">
const value1 = ref(true)
</script>

<template>
  <div>
    <el-switch v-model="value1" />
    <el-switch
      v-model="value1"
      class="m-2"
      style="--ep-switch-on-color: black; --ep-switch-off-color: gray;"
    />
  </div>
</template>
