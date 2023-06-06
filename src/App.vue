<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getUser } from './api/user'

const printHelloString = ref('')

onMounted(async () => {
  const user = await getUser()
  printHelloString.value = `hello, i am developer , my flag is ${user.bio}`
})
</script>

<template>
  <div>
    <div class="text-center py-4 font-sans text-12">
      hello，what i can do for you?
    </div>
    <div class="text-center py-4 font-sans text-12">
      {{ printHelloString }}
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/mixin.scss';
</style>
