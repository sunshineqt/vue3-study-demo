import { ref, watchEffect } from 'vue';

// 缓存操作
const todoStorage = {
  fetch() { 
    let todos = JSON.parse(localStorage.getItem('vue3-todos') || '[]');
    console.log('f-todos: ', todos);
    todos.forEach((todo, index) => {
      todo.id = index + 1
    })
    return todos;
  }, 
  save(todos) { 
    localStorage.setItem('vue3-todos', JSON.stringify(todos))
  }
}

export function useTodos(state) {
  // state传参用于与外界沟通
  const todos = ref(todoStorage.fetch())
  console.log('todos: ', todos);
  function addTodo() {
    if (!state.newTodo) {
        console.log("请输入内容");
        return;
    }
    todos.value.push({
        id: todos.value.length + 1,
        title: state.newTodo,
        completed: false,
    });
    state.newTodo = "";
  }
  function removeTodo(todo) {
    todos.value.splice(todos.value.indexOf(todo), 1);
  }

  // 监听数据todos变化就存缓存
  watchEffect(() => {
      todoStorage.save(todos.value);
  });

  return {
    todos,
    removeTodo,
    addTodo,
  }

}