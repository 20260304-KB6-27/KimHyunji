import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTodoListStore = defineStore('todoList', () => {
  const state = reactive({
    todoList: [
      { id: 1, todo: 'ES6학습', done: false },
      { id: 2, todo: 'React학습', done: false },
      { id: 3, todo: 'ContextAPI 학습', done: true },
      { id: 4, todo: '야구경기 관람', done: false },
    ],
  })

  const addTodo = (todo) => {
    if (!todo.trim()) return
    state.todoList.push({
      id: new Date().getTime(),
      todo,
      done: false,
    })
  }

  const deleteTodo = (id) => {
    const index = state.todoList.findIndex((t) => t.id === id)
    if (index !== -1) state.todoList.splice(index, 1)
  }

  const toggleDone = (id) => {
    const index = state.todoList.findIndex((t) => t.id === id)
    if (index !== -1) state.todoList[index].done = !state.todoList[index].done
  }

  const doneCount = computed(() =>
    state.todoList.filter((t) => t.done).length
  )

  const todoList = computed(() => state.todoList)

  return { todoList, doneCount, addTodo, deleteTodo, toggleDone }
})