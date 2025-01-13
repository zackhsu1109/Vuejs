<script setup>
import { ref, watch, watchEffect } from 'vue';

    const formatTime = (today) => {       
        const hours = String(today.getHours()).padStart(2, '0');
        const minutes = String(today.getMinutes()).padStart(2, '0');
        const seconds = String(today.getSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
   }
  
   const clock  = ref(formatTime(new Date()))

   //只監聽clock變化一次
//    watch(clock, (newTime, oldTime)=>{
//        console.log('oldTime', oldTime)
//        console.log('newTime', newTime)
//    },{once:true}) //,{immediate:true})

watchEffect(()=>{
    console.log(clock.value)
})


    setInterval(() => {
        clock.value = formatTime(new Date())
    }, 1000);
</script>

<template>
    <div>
<h2>Watch vs WatchEffect</h2>
<h3>現在時間：{{ clock }}</h3>
    </div>
</template>

<style lang="css" scoped>

</style>