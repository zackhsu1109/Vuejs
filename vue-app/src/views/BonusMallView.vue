<script setup>
import AllProductComponent from '@/components/AllProductComponent.vue';
import LifeProductComponent from '@/components/LifeProductComponent.vue';
import StarbuckProductComponent from '@/components/StarbuckProductComponent.vue';
import TrafficComponent from '@/components/TrafficComponent.vue';

import { ref } from 'vue';


const tabs = ref([
    { name: '全部', component: AllProductComponent },
    { name: '便利生活', component: LifeProductComponent },
    { name: '星巴克', component: StarbuckProductComponent },
    { name: '旅遊交通', component: TrafficComponent },
])

const currentIndex = ref(0)
const currentTab = ref(tabs.value[0].component)

const click = idx => {
    currentIndex.value = idx
    currentTab.value = tabs.value[idx].component
}


</script>

<template>
  <div>
    <ul class="nav nav-tabs">
      <li class="nav-item" v-for="(tab, index) in tabs" :key="tab.name">
        <a 
          class="nav-link" 
          :class="{ active: currentIndex === index }" 
          href="#"
          @click="click(index)"
        >
          {{ tab.name }}
        </a>
      </li>
    </ul>

    <KeepAlive>
      <component :is="currentTab"></component>
    </KeepAlive>


    
  </div>
</template>



<style lang="css" scoped></style>