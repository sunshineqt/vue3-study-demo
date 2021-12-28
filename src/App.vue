<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <Todos />

    <HelloWorld msg="Hello Vue 3.0 + Vite" />
    <!-- reactive -->
    <!-- <Reactive /> -->
    
    <!-- reactive, computed, onMounted, onUnmounted, ref使用 -->
    <!-- <ReactiveSetup /> -->
    
    <!-- reactive, computed, onMounted, onUnmounted, ref, toRefs, watch使用 -->
    <ReactiveDeStructureRef />
    
    <!-- 传送门使用-Teleport: ModalButton -->
    <ModalButtonTeleport  />

    <!-- Emits使用 -->
    <Emits @click="onClick" @my-click="onMyClick" />
  </div>
</template>

<script>
import Todos from "./components/Todos.vue";
import HelloWorld from './components/HelloWorld.vue';
import Reactive from './components/Reactive.vue';
import ReactiveSetup from './components/ReactiveSetup.vue';
import ReactiveDeStructureRef from './components/ReactiveDeStructureRef.vue';
import ModalButtonTeleport from './components/ModalButtonTeleport.vue';
import Emits from './components/Emits.vue';

export default {
  name: 'App',
  components: {
    Todos,
    HelloWorld,
    Reactive,
    ReactiveSetup,
    ReactiveDeStructureRef,
    ModalButtonTeleport,
    Emits,
  }, 
  methods: {
    onClick() {
      console.log('click me');
    },
    onMyClick() {
      console.log('my-click me');
    }
  }
}
</script>
