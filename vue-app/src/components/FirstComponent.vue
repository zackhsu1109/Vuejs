<template>
    <h2 id="myH">My First Vue Component</h2>
</template>

<style scoped>

</style>

<script setup>
import { onMounted } from 'vue';

onMounted(()=>{

    const theH = document.querySelector('#myH')
    console.log(theH)
    console.log(theH.textContent);

})

    /*
    const theH = document.querySelector('#myH')
    console.log(theH)
    console.log(theH.textContent);
    */
    
</script>
