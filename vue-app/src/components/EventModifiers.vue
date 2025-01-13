<script setup>
import { ref } from 'vue'

    const submitHandler = ()=>{
        //event.preventDefault()
        //資料驗證
        console.log('submit')
        //驗證沒問題才要送出
        //透過Ajax技術送出
        fetch()
    }

    const div1Handler = ()=>{
        console.log('div1')
    }
    const div2Handler = ()=>{
        console.log('div2')
    }
    const pHandler = ()=>{
        console.log('p')
    }
const userName = ref('')
    const keyupHandler = evt =>{
        console.log(evt)
        alert(userName.value)
    }
const clearHandler = ()=>{
    userName.value=''
}
</script>

<template>
    <div>
  <h2>事件修飾符說明</h2>
  <form @submit.prevent="submitHandler">
    <input type="text" name="userName">
    <button>submit</button>
  </form>

  <div class="d1" @click.self="div1Handler">d1
    <input type="text" v-model="userName" @keyup.enter="keyupHandler($event)" @keyup.delete="clearHandler" />
    <div class="d2" @click="div2Handler">d2
        <p @click.stop="pHandler">PPPPP</p>
    </div>
   </div>



    </div>
</template>

<style lang="css" scoped>
.d1{
    width:400px;
    height: 300px;
    background-color: lightpink;
}

.d2{
    width:300px;
    height:200px;
    background-color: lightcyan;
}

.d2>p{
    background-color: lightskyblue;
}
</style>