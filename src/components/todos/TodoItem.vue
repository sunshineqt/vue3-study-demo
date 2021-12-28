<template>
  <li :class="{completed: todo.completed, editing: todo === editedTodo}">
    <div class="view">
      <input type="checkbox" v-model="todo.completed" />
      <label @dblclick="editTodo(todo)" class="item-label">{{todo.title}}</label>
      <button @click="removeTodo(todo)">X</button>
    </div>
    <!-- 编辑待办 自定义指令设置焦点 -->
      <div><EditTodo
        class="edit" 
        v-model:todo-title="todo.title"
        v-todo-focus="todo === editedTodo"
        @blur="doneEdit(todo)" 
        @keyup.enter="doneEdit(todo)" 
        @keyup.escape="cancelEdit(todo)"
      /></div>
  </li>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  // 明确设置组件输入输出
  props: {
    todo: {
      type: Object,
      required: true,
    },
    editedTodo: Object,
  },
  // 输出
  emits: ['remove-todo', 'update:edited-todo'],
  setup (props, {emit}) {
    const state = reactive({
      beforeEditCache: "", // 缓存编辑之前的title
    })

    function removeTodo(todo) {
      // 派发出去，通知父组件
      emit('remove-todo', todo)
    }
  
    function editTodo(todo) {
      state.beforeEditCache = todo.title;
      emit('update:edited-todo', todo)
    }
    function cancelEdit(todo) {
      todo.title = state.beforeEditCache;
      emit('update:edited-todo', null)
    }
    function doneEdit(todo) {
      emit('update:edited-todo', null)
    }

    return {
      ...toRefs(state),
      removeTodo,
      editTodo,
      cancelEdit,
      doneEdit,
    }
  },
  directives: {
      "todo-focus": (el, binding) => {
          if (binding.value) {
              el.focus();
          }
      }
  },
}
</script>

<style scoped>
.completed label {
  text-decoration: line-through;
}

.edit, 
.editing .view {
  display: none;
}

.view, 
.editing .edit{
  display: block;
}

li { 
  text-align: center;
}
.item-label {
  width: 160px;
  padding: 10px;
  display: inline-block;
  text-align: left;
}
</style>