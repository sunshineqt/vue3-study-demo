<template>
  <div>
    <div>counter: {{data.counter}}</div>
    <div>computed: {{data.doubleCounter}}</div>
    <div>msg: {{msg}}</div>
  </div>
</template>

<script>
import { reactive, computed, onMounted, onUnmounted, ref } from 'vue';

export default {
  setup () {
    const data = useCounter();

    const msg = ref('some msg');

    return {data, msg}
  }
}

// 也可以提出放到单独文件中，多个组件可共用
function useCounter() {
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

    return data;
}

</script>

<style lang="scss" scoped>

</style>