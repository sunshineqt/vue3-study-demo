<template>
  <div>
    <div @click="$emit('click')">自定义事件</div>
    <!-- my-click这种跟原生事件名称区分开来的情况，不写emits也可以,写是最佳实践 -->
    <!-- 自定义事件最好不要与原生事件重名 -->
    <div @click="$emit('my-click')">点击-区分原生事件名</div>
  </div>

</template>

<script>
  export default {
    // emits指定了之后，只会作为自定义事件处理，而不会当成原生事件处理；
    // 不加emits，则会触发两次click；
    emits: ['click', 'my-click']
  }
</script>

<style scoped>

</style>