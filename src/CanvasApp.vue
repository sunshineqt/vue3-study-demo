<template>
  <div>
    <piechart @click="handleClick" :data="state.data" :x="200" :y="200" :r="200" />
  </div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
  setup () {
    const state = reactive({
      data: [
        {name: 'kk', count: 200, color: 'brown'},
        {name: 'll', count: 230, color: 'yellow'},
        {name: 'uu', count: 500, color: 'pink'},
        {name: 'sa', count: 600, color: 'skyblue'}
      ]
    });

    function handleClick() {
      console.log('click-0');
      state.data.push({name: 'te', count: 30, color: 'orange'})
    }

    return {
      state,
      handleClick,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>