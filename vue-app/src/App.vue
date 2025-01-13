<script setup>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.js'

import BindingComponent from './components/BindingComponent.vue';
import BMIComponent from './components/BMIComponent.vue';
import ComputedDemo from './components/ComputedDemo.vue';
import FirstComponent from './components/FirstComponent.vue';
import MyComponent from './components/MyComponent.vue';

import SecondComponent from './components/SecondComponent.vue';
import WatchDemo from './components/WatchDemo.vue';
import AboutView from './views/AboutView.vue';
import ContactView from './views/ContactView.vue';
import HomeView from './views/HomeView.vue';
import NavbarComponent from './components/NavbarComponent.vue';
import DirectiveComponent from './components/DirectiveComponent.vue';
import EventModifiers from './components/EventModifiers.vue';
import { ref } from 'vue';
import ParentComponent from './components/ParentComponent.vue';
import FancyButton from './components/FancyButton.vue';

const show = ref(true)

</script>

<template>
    <div class="container">
        <h2>Hello Vue!!!!!</h2>
        <NavbarComponent></NavbarComponent>
        <!-- <RouterLink to="/">首頁</RouterLink> | 
 <RouterLink to="/about">關於我們</RouterLink> | 
 <RouterLink to="/contact">聯絡我們</RouterLink> |  -->

        <hr />
        <!--是一個容器，根據路由，載入不同的Component-->
        <RouterView></RouterView>

        <hr />
        <!-- <FancyButton>
            <i class="bi bi-airplane"></i>
            <span class="mx-1">click</span>
        </FancyButton>
        <FancyButton>
            <i class="bi bi-apple"></i>
            <span class="mx-1">apple</span>
        </FancyButton>
        <FancyButton>
            <i class="bi bi-balloon"></i>
            <span class="mx-1">balloon</span>

        </FancyButton>


        <ParentComponent></ParentComponent> -->

        <div>
            <!-- <DirectiveComponent></DirectiveComponent>
     <EventModifiers></EventModifiers> -->

            <!-- <button @click="show = !show">Toggle</button>
            <Transition name="img1">
                <img v-if="show" src="/images/loading.gif" alt="loading" />
            </Transition> -->
        </div>



        <!-- <HomeView></HomeView>
 <AboutView></AboutView>
 <ContactView></ContactView>
 
  <BMIComponent></BMIComponent>
<WatchDemo></WatchDemo>
 <ComputedDemo></ComputedDemo>

 <MyComponent></MyComponent>
 <FirstComponent></FirstComponent>
<SecondComponent></SecondComponent>  
<BindingComponent></BindingComponent>-->

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