<script setup lang="ts">
const count = ref(0)
</script>

<template>
  <div class="my-2 flex flex-wrap items-center justify-center text-center">
    <el-button @click="count++">
      count is: {{ count }}
    </el-button>
    <el-button type="primary" @click="count++">
      count is: {{ count }}
    </el-button>
    <el-button type="success" @click="count++">
      count is: {{ count }}
    </el-button>
    <el-button type="warning" @click="count++">
      count is: {{ count }}
    </el-button>
    <el-button type="danger" @click="count++">
      count is: {{ count }}
    </el-button>
    <el-button type="info" @click="count++">
      count is: {{ count }}
    </el-button>
  </div>
</template>
