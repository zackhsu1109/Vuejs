<script setup>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.js'

import NavbarComponent from './components/NavbarComponent.vue';

</script>

<template>
    <div class="container">
        <br>
        <!--<h2>Hello Vue!!!!!</h2>-->
        <NavbarComponent></NavbarComponent>
        <!-- <RouterLink to="/">首頁</RouterLink> | 
        <RouterLink to="/about">關於我們</RouterLink> | 
        <RouterLink to="/contact">聯絡我們</RouterLink> |  -->

        <hr />
        <!--是一個容器，根據路由，載入不同的Component-->
        <RouterView></RouterView>

    </div>


</template>

<style scoped>
/* 隱藏 */
.img1-leave-from {
    opacity: 1;
    transform: translateX(0px);
}

.img1-leave-active,
.img1-enter-active {
    transition: all 3s ease;
}

.img1-leave-to {
    opacity: 0;
    transform: translate(200px);
}

/* 顯示 */
.img1-enter-from {
    opacity: 0;
    transform: translate(200px) scaleX(-1);
}

/* .img1-enter-active {
    transition: all 3s ease;
} */

.img-enter-to {
    opacity: 1;
    transform: translate(0px) scaleX(-1);
}


h2 {
    color: green;
    opacity: 1;
}

/* scaleX(-1) rotate(180deg); */
/* .img1 {
   
transform: translateX(0px) rotate(0deg);
opacity: 1;
}

.img1:hover {
    transform: translateX(300px) rotate(360deg);
    opacity: 0;

    transition: all 3s;
}

*/
</style>