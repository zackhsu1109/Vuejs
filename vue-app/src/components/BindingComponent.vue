<script setup>
import { ref } from 'vue';

    const message = ref("Text Interpolation")
    const isLogin = ref(false)
    const i = 1
    const sayHi = ()=>{
        return "Hi"
    }

    const week = ref(["日", "一", "二", "三", "四", "五", "六"])
    // console.log(week.value[new Date().getDay()])
    // console.log(new Date().getDay())
    const author = ref({    
        books: [
            'Vue 2 - Advanced Guide',
            'Vue 3 - Basic Guide',
            'Vue 4 - The Mystery'
        ]
    })

    const iSpanUrl = ref('https://www.ispan.com.tw')
    const imgUrl = ref('/images/car.jpg')

    //console.log(author.value.books.length)

    const id = ref(1)

    const isDisabled = ref(true)

const toggleHandler = ()=>{
    isDisabled.value  = !isDisabled.value
}

const name = ref('')
const clickHandler = ()=>{
   // console.log(name.value.trim().length)
   console.log(name.value.length)
 //  if(name.value.trim() === "Tom"){
    if(name.value === "Tom"){
    console.log('帳號相同')
   }else{
    console.log('帳號不相同')
   }
}

const num1 = ref(0)
const num2 = ref(0)
const total = ref(0)
const addHandler = ()=>{
    console.log(typeof num1.value)
//   total.value = Number(num1.value) + Number(num2.value)
  total.value = num1.value + num2.value
}



</script>

<template>
    <div>
<h2>Template Binding</h2>
    <!--{{ Text Interpolation 插值 表達式 Expression  }}  -->
     <p>{{ 2 }}</p>
     <p>{{ `Hello ${message}`  }}</p>
     <p>{{ 1 + 2 }}</p>
     <p>{{ sayHi() }}</p>
     <p>{{ false ? "YES" : "NO" }}</p>
     <p>{{ isLogin ? "登入帳號" : "請先登入" }}</p>

     <!--錯誤寫法，須改用三元運算子-->
     <!-- {{ if (true) { return 'Hello' } }} -->
       <!--錯誤寫法，不能做變數需告 -->
     <!--{{ let name = "Jack"  }}-->
     <p>{{i+1}}</p>

     <p>{{ new Date().toLocaleDateString()  }}</p>

     <div>星期{{ week[new Date().getDay()] }}</div>
     <div>出版了書籍：{{ author.books.length > 0 ? "是":"否" }}</div>
     <hr />
    <!--屬性繫節-->
    <a href="https://www.ispan.com.tw">iSpan</a> <br />
    <!-- v-bind:href="Expression" -->
    <a v-bind:href="iSpanUrl">iSpan</a><br />

    <img src="/images/car.jpg" />
    <img :src="imgUrl" :id />
    <img src="@/assets/car.jpg" alt="car" />

    <button @click="isDisabled = !isDisabled">Toggle1</button>
    <button @click="toggleHandler">Toggle2</button>
    <hr />
    <button :disabled="isDisabled">click</button>
<hr />
    <!--雙向繫節-->
    <!--.lazy 就會將原有input事件改成change事件-->
    <!--.trim 會去掉前後的空白 -->
    <input type="text" v-model.trim.lazy="name" /><button @click="clickHandler">click</button><span>{{ `Hello ${name}` }}</span>
    <hr />
    <!--.number 會將輸入數字字串轉型成數值型態-->
    <input type="text" v-model.number="num1">
    <input type="text" v-model.number="num2">
    <button @click="addHandler">+</button><span>{{ total }}</span>

    <br/>

    


   <div></div>
   <div></div>
   <div></div>
   <div></div>
    </div>
</template>

<style lang="css" scoped>

</style>