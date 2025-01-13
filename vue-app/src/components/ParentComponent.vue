<script setup>
import { ref } from 'vue';
import ChildComponent from './ChildComponent.vue';

const aaaaaa = ref(0)
const aeventHandler = data => {
    alert(data)
}
const beventHAndler = data => {
    alert(data)
}
</script>

<template>
    <div>
        <h2>Parent Component</h2>
        <hr />
        <ChildComponent abc="zzzzzzz" :xyz="aaaaaa" @aevent="aeventHandler" @bevent="beventHAndler"></ChildComponent>
    </div>
</template>

<style lang="css" scoped></style>