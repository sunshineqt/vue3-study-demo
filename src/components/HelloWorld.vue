<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="count++">count is: {{ count }}</button>
    <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
    <!-- 实例方法组件 -->
    <comp />
    <!-- v-model测试 -->
    <VmodelTest v-model="count" />

    <!-- 如果想更改modelValue属性名称，如把modelValue改为count属性 -->
    <!-- <VmodelProperty v-model:count="count" /> -->
    <!-- 等效于 -->
    <VmodelProperty :count="count" @update:count="count=$event" />

  <!-- 渲染函数API的变化 - slot变化 -->
  <!-- <RenderTest v-model:count="count">
      <template v-slot:default>title</template>
      <template v-slot:content>content...</template>
  </RenderTest> -->

  <!-- 函数式组件 -->
  <Functional level="3"> 这是个动态h元素</Functional>

  <!-- 异步组件 -->
  <AsyncComp></AsyncComp>

  <!-- 自定义指令 -->
  <p v-hightlight="'green'">hightlight this text!!!</p>

  <!-- 动画测试 -->
  <TransitionTest />

  </div>
</template>

<script>
import { h, defineAsyncComponent } from 'vue';
import VmodelTest from "./VmodelTest.vue";
import VmodelProperty from './VmodelProperty.vue';
import Functional from "./Functional.vue";
import TransitionTest from "./TransitionTest.vue";

export default {
  name: 'HelloWorld',
  components: {
    VmodelTest,
    VmodelProperty,
    Functional,
    TransitionTest,
    // 定义异步组件，不会在主包中出现
    AsyncComp: defineAsyncComponent(() => import('./NextPage.vue')),
    // AsyncComp: () => import('./NextPage.vue'), // 这种写法与函数式组件无法区分，所以vue3指定外层明确包裹一层defineAsyncComponent
    RenderTest: {
      props: {
        count: {
          type: Number,
          default: 0,
        }
      },
      // render() {
      //   const emit = this.$emit;
      //   const count = this.count;
      //   return h('div', [
      //     h('div', {
      //       onClick() {
      //         emit('update:count', count + 1)
      //       }
      //     }, `I am renderTest：${this.count}`)
      //   ])
      // },
      render() {
      //   this.$slots.default(); // 取到默认插槽的内容
      //   this.$slots.content(); // 取到具名插槽的内容
        return h('div', [
          h('div', { onClick: this.onClick }, [
            `I am renderTest：${this.count}`,
            this.$slots.default(),
            this.$slots.content()
            ])
        ])
      },
      methods: {
        // 单独拎出一个方法，就不用担心render内部this指向不对的问题
        onClick() {
          this.$emit('update:count', this.count + 1)
        }
      }
    }
  },
  props: {
    msg: String
  },
  data() {
    return {
      count: 1
    }
  }
}
</script>
