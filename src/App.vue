<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { pick } from 'lodash-es'
import { getUser } from './api/user'
import { useUser } from './store/user'
import HelloWorld from './components/HelloWorld.vue'

const userPinia = useUser()
const printHelloString = ref('')

const person = {
  name: 'Larry',
  age: 23,
  gender: 'male'
}

const pickName = ref(pick(person, 'name'))

onMounted(async () => {
  const user = await getUser()
  userPinia.setUser(user.name, user.id)
  printHelloString.value = `hello, i am developer , my flag is ${user.bio}`
})

// 监听store变化
// userPinia.$subscribe((mutation, state) => {})
</script>

<template>
  <div>
    <div class="text-center py-4 font-sans text-16px">
      hello，what i can do for you?
    </div>
    <div class="py-4 text-center font-sans text-4 animate__animated animate__backOutRight animate__bounce">
      {{ printHelloString }}
    </div>
    <div class="text-center py-4 font-sans text-4">
      {{ pickName }}
    </div>
    <HelloWorld />
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/mixin.scss';
</style>
