<script setup>
import PagingComponent from '@/components/PagingComponent.vue';
import { ref, watchEffect } from 'vue';

const BASE_URL = import.meta.env.VITE_APIURL
const API_URL = `${BASE_URL}/spot/spotimages`


const datas = ref({
    "categoryId": 0,
    "keyword": "公園",
    "start": 1,
    "rows": 9,
    "dir": false,
    "sort": "spotId"
})

const spots = ref({})
const totalPages = ref(1)

watchEffect(async () => {
    const response = await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(datas.value),
        headers: { 'Content-Type': 'application/json' }
    })
    spots.value = await response.json()
    console.log(spots.value)
    //92/9 計算出共幾頁
    totalPages.value = +datas.value.rows === 0 ? 1 : Math.ceil(spots.value.count / datas.value.rows)



})


const pagingHandler = page => {
    datas.value.start = page
}
</script>

<template>
    <div>
        <h2>台北市景點</h2>
        <PagingComponent :totalPages="totalPages" :thePage="datas.start" @goPaging="pagingHandler"></PagingComponent>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" v-for="{ spotId, spotImage, spotTitle, spotDescription, address } in spots.list"
                :key="spotId">
                <div class="card h-100">
                    <img :src="spotImage" class="card-img-top" :alt="spotTitle">
                    <div class="card-body">
                        <h5 class="card-title">{{ spotId }} {{ spotTitle }}</h5>
                        <p class="card-text">{{ spotDescription.length <= 100 ? spotDescription :
                            spotDescription.substring(0, 100) }}...</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-body-secondary">{{ address }}</small>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <PagingComponent :totalPages="totalPages" :thePage="datas.start" @goPaging="pagingHandler"></PagingComponent>
</template>

<style lang="css" scoped></style>