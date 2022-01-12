<template>
  <p>
    <el-icon>
      <Grape />
    </el-icon>
    <el-icon>
      <IceCream />
    </el-icon>
    <el-icon>
      <IceDrink />
    </el-icon>
  </p>

  <p>
    <el-button @click="hello">Hello</el-button>
    <el-button type="primary" @click="hello">Hello</el-button>
  </p>

  <el-dropdown>
    <el-button type="primary">
      Dropdown List
      <i class="el-icon-arrow-down el-icon--right"></i>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
        <el-dropdown-item>Action 3</el-dropdown-item>
        <el-dropdown-item>Action 4</el-dropdown-item>
        <el-dropdown-item>Action 5</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>

  <p>
    <Counter />
  </p>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus/lib";
import { Grape, IceCream, IceDrink } from "@element-plus/icons-vue";

const hello = () => ElMessage.info("hello world");
</script>
