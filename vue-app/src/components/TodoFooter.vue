<script setup>
import { useTodoStore } from '@/stores/todo';
const todoStore = useTodoStore()


//定義父組件傳過來的參數
const props = defineProps({
    total: Number
})

//定義父組件傳過來的事件
const emit = defineEmits(['removeCompleted'])

const clickHandler = () => {
    //觸發父組件的事件執行父組件的removeCompletedHandler
    emit('removeCompleted')
}
</script>

<template>
    <div class="mt-3 d-flex justify-content-between">
        <strong class=" me-3">尚有 {{ todoStore.remaining }} 個工作未完成</strong>
        <button @click="clickHandler" class="btn btn-warning me-3">清除完成工作</button>
    </div>
</template>

<style lang="css" scoped></style>