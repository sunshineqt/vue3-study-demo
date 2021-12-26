<!--ref、reactive、watch、computed、toRefs-->

<template>
  <div>
    <div>counter: {{counter}}</div>
    <div>computed: {{doubleCounter}}</div>
    <div>msg: {{msg}}</div>
    <p ref="desc"></p>
  </div>
</template>

<script>
import { reactive, computed, onMounted, onUnmounted, ref, toRefs, watch } from 'vue';

export default {
  setup () {
    // counter, doubleCounter从data中解构，前提是reactive包裹的data返回时使用了toRefs
    const {counter, doubleCounter} = useCounter();

    // ref，单值响应式
    const msg = ref('some msg');

    // 使用元素引用ref
    const desc = ref(null);

    // 侦听器
    watch(counter, (val, oldVal) => {
      const p = desc.value;
      p.textContent = `counter change from ${oldVal} to ${val}`;
      // p.innerHTML = `counter change from ${oldVal} to ${val}`;

    })

    return {counter, doubleCounter, msg, desc}
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
    // 使用toRefs可以将reactive中响应式数据单独转换成ref数据，后期使用时候，可以直接解构出data里对应的数据
    return toRefs(data);
}

</script>

<style lang="scss" scoped>

</style>