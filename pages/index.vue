<template>
  <!-- Remove this component to get started! -->
  <div class="page-index">
    <div class="display-logo">
      <img
        class="logo"
        src="https://element-plus.org/images/element-plus-logo.svg"
      />
      <NuxtLogo class="logo" />
    </div>
    <h2>
      <a target="_blank" href="https://v3.nuxtjs.org/">Element Plus</a>
      With
      <a target="_blank" href="https://v3.nuxtjs.org/">NuxtJS</a>
    </h2>
    <p>
      <el-button></el-button>
    </p>
  </div>
</template>

<script setup lang="ts">
import NuxtLogo from "../components/NuxtLogo.vue";
</script>

<style>
.page-index {
  margin-top: 60px;
  text-align: center;
}

.display-logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  width: 15rem;
  margin: 1rem;
}
</style>
