<template>
  <div>
    <h2>TodoList 테스트 (Pinia)</h2>

    할일 추가 :
    <input type="text" v-model="todo" @keyup.enter="addTodoHandler" />
    <button @click="addTodoHandler">추가</button>

    <hr />

    <ul>
      <li v-for="item in todoList" :key="item.id">
        <span @click="toggleDone(item.id)" style="cursor: pointer">
          {{ item.todo }} {{ item.done ? '(완료)' : '' }}
        </span>

        <button @click="deleteTodo(item.id)">삭제</button>
      </li>
    </ul>

    <div>완료된 할일 수 : {{ doneCount }}</div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useTodoListStore } from './stores/todoList'

const todo = ref('')

const store = useTodoListStore()

const { todoList, addTodo, deleteTodo, toggleDone } = store

const doneCount = computed(() => store.doneCount)

const addTodoHandler = () => {
  addTodo(todo.value)
  todo.value = ''
}
</script>