<script setup>
const props = defineProps({
    totalPages: Number,
    thePage: Number
})
const emit = defineEmits(['goPaging'])

const clickHandler = page => {
    //觸發父組件的事件，並傳遞資料給它
    emit('goPaging', page)
}

</script>

<template>
    <div>
        <nav>
            <ul class="pagination">
                <li @click="clickHandler(page)" v-for="(page, idx) in totalPages" class="page-item"><a
                        :class="{ 'currentPage': thePage === page, 'page-link': true }" href="#">{{ page }}</a></li>
            </ul>
        </nav>

    </div>
</template>

<style lang="css" scoped>
.pagination li {
    cursor: pointer;
}

.currentPage {
    background-color: lightblue;
}
</style>