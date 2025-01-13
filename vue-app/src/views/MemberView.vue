<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

defineProps({
    id: String
})

const user = ref({
    "name": "",
    "password": ""
})

const router = useRouter()


const clickHandler = () => {
    //todo call api 傳 user 到 api 確認帳號密是否正確
    //api 回傳的結果要有這個人的角色

    if (user.value.name === "admin") {
        //載入AdminView.vue

        router.push("/admin")
    } else {
        //載入UserView.vue
        router.push({ "name": "user" })
    }
}



//在 script 取參數值
const route = useRoute()
console.log("id：", route.params.id)
</script>

<template>
    <div>
        <input type="text" v-model="user.name" />
        <input type="password" v-model="user.password" />
        <button @click="clickHandler">Login</button>
        <hr />
        <!--方法一. 在 template 讀取 URL 的參數 -->
        <h2>會員中心 {{ $route.params.id }}</h2>
        <p>會員編號 {{ id }}</p>

        <!--
       方法二 
       1.在路由的設定檔加上 props:true
       2.用defineProps宣告參數名稱
       3.直接在{{ }}用參數名稱
       -->

    </div>
</template>

<style lang="css" scoped></style>