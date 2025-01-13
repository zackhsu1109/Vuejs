<script setup>
import { useCounterStore } from '@/stores/counter';
const storeCounter = useCounterStore()

</script>

<template>
    <div>
        <h2>Team1 Page</h2>
        <p>count：{{ storeCounter.count }}</p>
        <p>doubleCount：{{ storeCounter.doubleCount }}</p>
        <button @click="storeCounter.add">add</button>
    </div>
</template>

<style lang="css" scoped></style>