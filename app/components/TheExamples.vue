<script setup lang="ts">

const hello = () => ElMessage.info("hello world");
const helloSuccess = () => ElMessage.success("hello world");

const color = useColorMode();
const colorMode = computed({
  get: () => color.value === 'dark',
  set: () => (color.preference = (color.value === 'dark' ? 'light' : 'dark')),
});
</script>

<template>
  <ClientOnly>
    <el-switch v-model="colorMode" inline-prompt active-text="dark" inactive-text="light" size="large"/>
  </ClientOnly>

  <br >

  <el-dropdown class="m-4" type="primary">
    <el-button type="primary">
      Dropdown List
      <el-icon class="el-icon--right">
        <el-icon-arrow-down />
      </el-icon>
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

  <br >

  <el-button :icon="ElIconView" class="m-4" @click="hello">Hello</el-button>
  <el-button class="m-4" type="primary" @click="hello">Hello</el-button>
  <el-button class="m-4" type="success" @click="helloSuccess">Hello</el-button>

  <br >

  <TheCounter class="m-4" />

  <div class="flex flex-col gap-2 items-center justify-center">
    <ExampleDatePickers />
    <ExampleIcons />
    <ExampleButtons />
    <ExampleSwitches />
    <ExampleTags />
  </div>
</template>
