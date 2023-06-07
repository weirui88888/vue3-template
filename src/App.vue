<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { getUser } from './api/user'
import { useUser } from './store/user'

const userPinia = useUser()
const { uid, name } = storeToRefs(userPinia)
const printHelloString = ref('')

onMounted(async () => {
  const user = await getUser()
  userPinia.setUser(user.name, user.id)
  printHelloString.value = `hello, i am developer , my flag is ${user.bio}`
})

const changeUserName = () => {
  // userPinia.$patch({
  //   name: 'jsxissb'
  // })

  userPinia.setUser('a', 'b')
}

// 监听store变化
// userPinia.$subscribe((mutation, state) => {})
</script>

<template>
  <div>
    <div class="text-center py-4 font-sans text-12">
      hello，what i can do for you?
    </div>
    <div class="text-center py-4 font-sans text-12">
      {{ printHelloString }}
    </div>
    {{ name }} {{ uid }}

    <button @click="changeUserName">
      change
    </button>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/mixin.scss';
</style>
