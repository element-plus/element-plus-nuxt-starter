<script setup lang="ts">
import { useUserStore } from '~/stores/user'

const route = useRoute()
const user = useUserStore()
const name = route.params.id
watchEffect(() => {
  user.setNewName(route.params.id as string)
})
</script>

<template>
  <div m-3>
    <h3>Hi, {{ name }}!</h3>

    <template v-if="user.otherNames.length">
      <span>Also as known as:</span>
      <ul>
        <li v-for="otherName in user.otherNames" :key="otherName">
          <router-link :to="`/hi/${otherName}`" replace>
            {{ otherName }}
          </router-link>
        </li>
      </ul>
    </template>

    <Counter />

    <div>
      <NuxtLink to="/">Back</NuxtLink>
    </div>
  </div>
</template>
