<script setup>
import BMIComponent from '@/components/BMIComponent.vue';
import FirstComponent from '@/components/FirstComponent.vue';
import SecondComponent from '@/components/SecondComponent.vue';
import { ref } from 'vue';


const tabs = ref([
    { name: 'First', component: FirstComponent },
    { name: 'Second', component: SecondComponent },
    { name: 'BMI', component: BMIComponent }
])

const currentIndex = ref(0)
const currentTab = ref(tabs.value[0].component)

const mouseenterHandler = idx => {
    currentIndex.value = idx
    currentTab.value = tabs.value[idx].component
}


const items = [FirstComponent, SecondComponent]
const activeIndex = ref(0)


</script>

<template>
    <div>
        <!--<h2>Tabs</h2>-->
        <ul class="nav nav-tabs">
            <li class="nav-item" v-for="(tab, index) in tabs" :key="tab.name">
                <a class="nav-link" :class="{ active: currentIndex === index }" href="#"
                    @mouseenter="mouseenterHandler(index)">{{
                        tab.name
                    }}</a>
            </li>
        </ul>
        
        <KeepAlive>
            <component :is="currentTab"></component>
        </KeepAlive>

        <hr />
        <select v-model="activeIndex">
            <option value="0">First</option>
            <option value="1">Second</option>
        </select>{{ activeIndex }}

        <component :is="items[activeIndex]"></component>
    </div>
</template>

<style lang="css" scoped></style>