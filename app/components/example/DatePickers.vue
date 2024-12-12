
<script setup lang="ts">
import zhCn from "element-plus/es/locale/lang/zh-cn";

const timeValue = ref("");
</script>

<template>
  <el-config-provider :locale="zhCn">
    <el-date-picker
      v-model="timeValue"
      type="date"
      placeholder="请选择日期"
    />
  </el-config-provider>
</template>
