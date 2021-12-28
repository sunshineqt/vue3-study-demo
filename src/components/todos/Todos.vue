<template>
  <div>
    <!-- 新增todo -->
    <EditTodo 
      v-model:todo-title="newTodo" 
      @keyup.enter="addTodo"
      autofocus
      placeholder="新增今日待办"
      autocomplete="off"
    />
    <!-- todo列表 -->
    <ul>
      <TodoItem  
        v-for="todo in filteredTodos" 
        :key="todo.id" 
        :todo="todo"
        v-model:edited-todo="editedTodo"
        @remove-todo="removeTodo"
        ></TodoItem>
    </ul>

    <!-- 过滤显示 -->
    <Filter :items="filterItems" v-model="visibility" />
  </div>
</template>

<script>
import { reactive, toRefs,} from 'vue';
import EditTodo from './EditTodo.vue';
import TodoItem from './TodoItem.vue';
import Filter from './Filter.vue';
import { useTodos } from './useTodos';
import { useFilter } from './useFilter';

export default {
    setup() {
      const todoState = reactive({
        newTodo: "",
        editedTodo: null,
      })
      const { todos, addTodo, removeTodo } = useTodos(todoState);
      const filterState = useFilter(todos)
        
      return {
          ...toRefs(todoState),
          ...toRefs(filterState),
          addTodo,
          removeTodo,
      };
    },
    components: { EditTodo, TodoItem, Filter }
}
</script>

<style scoped>

</style>