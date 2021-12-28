<template>
  <p class="filters">
    <span 
      v-for="item in items"
      :key="item.value" 
      @click="$emit('update:modelValue', item.value)" 
      :class="{selected: modelValue === item.value}">{{item.label}}</span>
  </p>
</template>

<script>
  export default {
    // 组件输入
    props: ['items', 'modelValue'],
    // 组件输出
    emits: ['update:modelValue']
  }
</script>

<style scoped>
.filters > span {
  padding: 2px 4px;
  margin-right: 4px;
  border: 1px solid transparent;
}
.filters > span.selected {
  border-color: skyblue;
}
</style>