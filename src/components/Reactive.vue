<template>
  <div>
    <div>counter: {{data.counter}}</div>
    <div>computed: {{data.doubleCounter}}</div>
  </div>
</template>

<script>
import { reactive, computed, onMounted, onUnmounted } from 'vue';

export default {
  setup () {
    // counter相关的逻辑都在一个代码块里
    const data = reactive({
      counter: 1,
      doubleCounter: computed(() => data.counter * 2)
    })

    let timer;

    onMounted( ()=>{
      timer = setInterval(() => {
        data.counter++;
      }, 1000)
    })

    onUnmounted( ()=> {
      clearInterval(timer);
    })

    return {data}
  }
}
</script>

<style lang="scss" scoped>

</style>