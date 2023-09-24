<template>
  <div class="box">
    <h1>hello {{ message }}</h1>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const message = ref('中国')
</script>
<style scoped lang="scss">
.box {
  width: 600px;
  height: 400px;
  background: black;
  h1 {
    color: white;
  }
}
</style>
