<template>
  <div class="box">
    <el-button type="primary" size="default" :icon="Plus">Primary</el-button>
    <el-button type="success" size="small" :icon="Edit">编辑按钮</el-button>
    <el-button type="danger" size="default" :icon="Delete">删除按钮</el-button>
    <p>这是一个比较完整验证的项目</p>
    <h1>hello {{ message }}</h1>
    <el-pagination
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000"
    />
    <Test></Test>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Plus, Edit, Delete } from '@element-plus/icons-vue'
import Test from '@/components/Test.vue'
const message = ref('中国')
</script>
<style scoped lang="scss">
.box {
  width: 600px;
  height: 400px;
  background: skyblue;
  h1 {
    color: white;
  }
}
</style>
