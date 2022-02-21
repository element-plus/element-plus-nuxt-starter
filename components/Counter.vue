<script setup lang="ts">
import { ElInputNumber } from "element-plus/dist/index.full.js";
const { count } = useCount();
</script>

<template>
  <el-input-number v-model="count" :min="1" :max="10" />
</template>
