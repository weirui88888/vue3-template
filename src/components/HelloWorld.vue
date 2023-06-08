<script setup lang="ts">
import { camelCase } from 'lodash-es'

const uniqueId = camelCase('Hello World')
</script>

<template>
  <div class="font-unique text-center">
    {{ uniqueId }}
  </div>
</template>
