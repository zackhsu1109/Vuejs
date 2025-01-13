<script setup>
import TodoAdd from '@/components/TodoAdd.vue';
import TodoFooter from '@/components/TodoFooter.vue';
import { computed, ref, watchEffect } from 'vue';
import { useTodoStore } from '@/stores/todo';
const todoStore = useTodoStore()


//將資料寫入localStorage 
//JSON格式的資料寫入要透過 JSON
// localStorage.setItem('abc', JSON.stringify(["a", "b", "c"]))
//讀取 localStorage 資料資料
// const datas = JSON.parse(localStorage.getItem('abc'))
// console.log(datas[2])

// const todos = ref(
//     [
//         { "id": "m21uwqfprb0ncx4", "title": "買菜", "completed": false },
//         { "id": "m21w6x73hw2tvrc", "title": "看電視", "completed": true },
//         { "id": "m21w6x73hw2abcd", "title": "睡覺", "completed": false },
//     ]
// )
//localStorage.setItem('todos', JSON.stringify(todos.value))

const todos = ref(JSON.parse(localStorage.getItem('todos')))


//取得唯一值
const uniqueId = () => Date.now().toString(36) + Math.random().toString(36).substring(2, 9);

//新增待辦事項
//todo 會收到子組件傳過來的資料
const todoAddHandler = todo => {

    todos.value.push({ "id": uniqueId(), "title": todo, "completed": false })


}


//刪除待辦事項
const removeTodo = todo => {
    //先找到Array.indexOf()要刪除的這筆todo的index
    const idx = todos.value.indexOf(todo)
    //用Array.splice(index, delcount)
    todos.value.splice(idx, 1)
}

//取得未完成待辦事項的數量
const remaining = computed(() => {
    const newTodos = todos.value.filter(todo => !todo.completed)
    return newTodos.length
})

//todos 響應式資料改變了就會執行watchEffect
watchEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos.value))
    //取得未完成待辦事項的數量
    const newTodos = todos.value.filter(todo => !todo.completed)

    //將未完成待辦事項數量傳給todoStore
    todoStore.countRemaining(newTodos.length)
})

//刪除所有已完成的待辦事項
const removeCompletedHandler = () => {
    for (let i = todos.value.length - 1; i >= 0; i--) {
        //completed為true就是要刪除這筆資料
        if (todos.value[i].completed) {
            todos.value.splice(i, 1)
        }
    }

}
</script>

<template>
    <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
            <h2>代辦事項</h2>
            <!--將自訂事件傳到TodoAdd.vue(子組件)-->
            <!--再由子組件觸發此事件，並將資料傳到父組件-->
            <TodoAdd @todoAdd="todoAddHandler"></TodoAdd>
            <ol class="list-group list-group-numbered">
                <li v-for="todo in todos" :key="todo.id"
                    class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                        <input type="checkbox" v-model="todo.completed" class="form-check-inpu me-3">
                        <label class="form-label" :class="{ completed: todo.completed }">{{ todo.title }}</label>
                    </div>
                    <button @click="removeTodo(todo)" class="badge text-bg-danger rounded-pill">X</button>
                </li>
            </ol>
            <!--父組件透過自訂的total屬性，把資料傳給子組件-->
            <TodoFooter :total="remaining" @removeCompleted="removeCompletedHandler"></TodoFooter>

        </div>
        <div class="col-3">
        </div>

    </div>
</template>

<style lang="css" scoped>
.completed {
    color: #949494;
    text-decoration: line-through;
}
</style>