<script setup lang="ts">
import { ref } from 'vue'
import HelloWorld from '@comps/HelloWorld.vue'

const show = ref(false)
</script>

<template>
  <div>
    <HelloWorld />
    <div v-if="show" class="you">
      你
    </div>
    <button class="bg-blue-400 hover:bg-blue-500 text-sm text-white font-mono font-light py-2 px-4 rounded border-2 border-blue-200 dark:bg-blue-500 dark:hover:bg-blue-600">
      Button
    </button>

    <div class="dark:bg-red:10">
      你好
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/mixin.scss";

.you {
  color: $color-basis;
}

.btn {
  @include button-clear;
  @include button-basis();
}
</style>
