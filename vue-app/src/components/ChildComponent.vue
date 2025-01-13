<script setup>
const props = defineProps({
    abc: String,
    xyz: Number
})

const emit = defineEmits(["aevent", "bevent"])

const clickHandler = () => {
    //觸發父組件傳進來的事件，就會去執行父組件中對應的function
    emit("aevent", "aaaaa")
    emit("bevent", "bbbbb")
}
</script>

<template>
    <div>
        <h2 @click="clickHandler">Child Component</h2>
        <p>{{ abc }}</p>
        <p>{{ xyz }}</p>
    </div>
</template>

<style lang="css" scoped></style>