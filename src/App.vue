<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
  <div>
    <div class="you" v-if="show">你</div>
    <button @click="show = !show" class="btn">hello</button>
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
