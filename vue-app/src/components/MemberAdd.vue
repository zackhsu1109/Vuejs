<script setup>
import { ref } from 'vue';
const BASE_URL = import.meta.env.VITE_APIURL

const API_URL = `${BASE_URL}/members` // "http://localhost:8080/api/members"

const emits = defineEmits(['loadMember'])
const user = {
    "name": "",
    "password": "",
    "passwordConfirm": "",
    "email": "",
    "age": ""
}
const member = ref(user)

//會員新增
const addHandler = async () => {
    // console.log(member.value)
    const response = await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(member.value),
        headers: { 'Content-Type': 'application/json' }
    })
    if (response.ok) {
        alert('新增成功')
        member.value = {
            "name": "",
            "password": "",
            "passwordConfirm": "",
            "email": "",
            "age": ""
        }
        //觸發父組件的事件
        emits('loadMember')
    }

}
</script>

<template>
    <div>
        <h3>會員新增</h3>
        <form>
            <div class="input-group">
                <label for="account" class="input-group-text">姓名</label>
                <input type="text" class="form-control" v-model.trim="member.name" id="account" required autofocus
                    autocomplete="off">
            </div>
            <div class="input-group">
                <label for="pwd1" class="input-group-text">密碼</label>
                <input type="password" class="form-control" v-model.trim="member.password" id="pwd1">
            </div>
            <div class="input-group">
                <label for="pwd2" class="input-group-text">密碼確認</label>
                <input type="password" class="form-control" v-model="member.passwordConfirm" id="pwd2">
            </div>
            <div class="input-group">
                <label for="email" class="input-group-text">電子郵件</label>
                <input type="email" v-model.trim="member.email" class="form-control" id="email">
            </div>
            <div class="input-group mb-3">
                <label for="age" class="input-group-text">年紀</label>
                <input type="number" class="form-control" id="age" v-model="member.age">
            </div>
            <button type="submit" @click.prevent.stop="addHandler" class="btn btn-primary" id="buttonSubmit">送出 <i
                    class="bi bi-person-fill-check"></i></button>
        </form>
    </div>
</template>

<style lang="css" scoped></style>