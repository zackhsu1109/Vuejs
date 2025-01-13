<!-- <script>
import { ref } from 'vue';


    export default{
       //options api
        // data(){
        //    return {message:"Options API"} 
        // }

       //compostion api
       setup(){
        const message = ref("Composition API")
        return {message}
       }
    }
</script> -->

<script setup>
  import { nextTick, onMounted, onUpdated, reactive, ref, toRefs } from 'vue';
  const message = ref("setup 語法糖")

  // const employee = ref({"name":"Tom","age":20})
  // const {name, age} = toRefs(employee.value)
  // console.log(name)
  // console.log(age)


// let data = reactive({count:10})
// console.log(data)

// data = {count:11}
// console.log(data)

// let refData = ref({count:20})
// console.log(refData)
// refData.value.count = 21
// console.log(refData)


  const count =ref(0)
 
  const add = async()=>{
    count.value++ //不 wait

    await nextTick()

    const btn = document.querySelector('#button1')
   console.log("click", btn.textContent)
  }

  //DOM Tree 產生會觸發，就一次
onMounted(()=>{  
  const btn = document.querySelector('#button1')
  console.log("mounted", btn.textContent)
})

//DOM Tree 更新完成會觸發
onUpdated(()=>{
  const btn = document.querySelector('#button1')
  console.log("updated", btn.textContent)
})
</script>

<template>
    <div>
      <input type="text" v-model="message" />
      <h2>第二個 Component {{ message }}</h2>
      <button id="button1" @click="add">{{ count }}</button>
    </div>
</template>

<style lang="css" scoped>
h2{color:blue}
</style>