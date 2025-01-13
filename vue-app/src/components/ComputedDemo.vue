<script setup>

import { computed, ref } from 'vue';

    const celsius = ref(0)
    const TempatureConvert = ()=>{  
        console.log('TempatureConvert')    
        return (celsius.value * 9 / 5) + 32
    }
    // const fahrenheit = computed(()=>(celsius.value * 9 / 5) + 32)
    const fahrenheit = computed(()=>{
        console.log('computed')
       return (celsius.value * 9 / 5) + 32
    })



    const height = ref(0)
    const weight = ref(0)

    const bmi = computed(()=>{
        console.log('computed')
       return weight.value / ((height.value/100)*(height.value/100))
    })


    


</script>

<template>
    <div>

    <h2>Computed Demo</h2>


    攝氏:<input type="text" v-model.number="celsius"><br/>
    華氏：{{ (celsius * 9 / 5) + 32 }}<br/>
    華氏(function)：{{ TempatureConvert()}} | {{ TempatureConvert()}} | {{ TempatureConvert()}}<br/>
    華氏(computed)：{{ fahrenheit }} | {{ fahrenheit }} | {{ fahrenheit }}<br/>


    <br/>
    <br/>


    身高:<input type="text" v-model.number="height"><br/>
    體重:<input type="text" v-model.number="weight"><br/>
    BMI:{{ weight/ ((height/100)*(height/100))}}<br/>

    BMI:{{ bmi }} | {{ bmi }} | {{ bmi }}<br/>
    


    </div>
    
</template>

<style lang="css" scoped>

</style>