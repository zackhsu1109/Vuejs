<script setup>
import MemberAdd from '@/components/MemberAdd.vue'
import { ref } from 'vue'

const BASE_URL = import.meta.env.VITE_APIURL

const API_URL = `${BASE_URL}/members` // "http://localhost:8080/api/members"

const members = ref([])
const member = ref({})

//讀取會員資料
const loadMembers = async () => {
    const response = await fetch(API_URL)
    if (!response.ok) {
        alert('有問題!!')
    } else {
        const datas = await response.json()
        members.value = datas.map(_member => ({
            ..._member,
            isBrowse: true

        }))
        console.log(members.value)
    }
}
loadMembers()


//會員刪除
const removeHandler = async (member) => {
    if (window.confirm('真的要刪除嗎?')) {
        //刪除 URL => http://localhost:8080/api/members/7
        const response = await fetch(`${API_URL}/${member.memberId}`, {
            method: 'DELETE' //HTTP DELETE
        })

        if (response.ok) {
            loadMembers()
        }
    }
}

//編輯模式及瀏覽模式的切換 =>進入到編輯模式
const editHandler = _member => {
    member.value = _member
    member.value.isBrowse = !member.value.isBrowse
}
//編輯模式及瀏覽模式的切換=> 回到瀏覽模式
const cancelHandler = () => {
    member.value.isBrowse = !member.value.isBrowse
}

//會員修改
const updateHandler = async () => {
    // console.log(member.value)
    const response = await fetch(`${API_URL}/${member.value.memberId}`, {
        method: 'PUT',
        body: JSON.stringify(member.value),
        headers: { 'Content-Type': 'application/json' }
    })
    if (response.ok) {
        cancelHandler()
        loadMembers()
    }
}

</script>

<template>
    <div>
        <h2>會員管理</h2>
        <div class="row">
            <div class="col-8">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>編號 </th>
                            <th>姓名 </th>
                            <th>電子郵件 </th>
                            <th>年紀</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="member in members" :key="member.memberId">
                            <!--瀏覽模式-->
                            <template v-if="member.isBrowse">
                                <td>{{ member.memberId }}</td>
                                <td>{{ member.name }}</td>
                                <td>{{ member.email }}</td>
                                <td>{{ member.age }}</td>
                                <td>
                                    <button title="編輯" class="btn btn-secondary mx-3" @click="editHandler(member)">
                                        <i class="bi bi-pencil-square"></i></button>
                                    <button title="刪除" class="btn btn-danger" @click="removeHandler(member)">
                                        <i class="bi bi-trash-fill"></i></button>
                                </td>
                            </template>
                            <!--編輯模式-->
                            <template v-if="!member.isBrowse">
                                <td>{{ member.memberId }}</td>
                                <td><input type="text" v-model="member.name" /></td>
                                <td><input type="text" v-model="member.email" /></td>
                                <td><input type="text" v-model="member.age" /></td>
                                <td>
                                    <button title="修改" @click="updateHandler" class="btn btn-primary mx-3"><i
                                            class="bi bi-person-fill-add"></i></button>
                                    <button title="取消" @click="cancelHandler()" class="btn btn-warning">
                                        <i class="bi bi-person-fill-dash"></i></button>
                                </td>

                            </template>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-4">
                <MemberAdd @loadMember="loadMembers"></MemberAdd>
            </div>
        </div>

    </div>
</template>

<style lang="css" scoped></style>