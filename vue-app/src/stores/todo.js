import { defineStore } from "pinia";
import { ref } from "vue";

export const useTodoStore = defineStore('todo', () => {

    let todos = localStorage.getItem('todos')
    console.log(typeof todos)
    if (todos === "null") {
        todos = []
    } else {
        todos = JSON.parse(todos)
    }


    // const todos = JSON.parse(localStorage.getItem('todos'))

    //取得未完成待辦事項的數量
    const newTodos = todos.filter(todo => !todo.completed)
    const remaining = ref(newTodos.length)

    //修改待辦事項
    const countRemaining = count => {
        remaining.value = count
    }

    return { remaining, countRemaining }
})