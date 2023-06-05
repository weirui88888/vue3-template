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
    <button class="btn" @click="show = !show">
      hello
    </button>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/mixin.scss';
.you {
  color: $color-basis;
}

.btn {
  @include button-clear;
  @include button-basis();
}
</style>
