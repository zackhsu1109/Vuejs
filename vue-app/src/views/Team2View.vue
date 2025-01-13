<script setup>
import { useCounterStore } from '@/stores/counter';
const storeCounter = useCounterStore()

</script>

<template>
    <div>
        <h2>Team2 Page</h2>
        <p>count：{{ storeCounter.count }}</p>
        <p>doubleCount：{{ storeCounter.doubleCount }}</p>
    </div>
</template>

<style lang="css" scoped></style>