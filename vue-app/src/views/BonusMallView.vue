<script setup>
import AllProductComponent from '@/components/AllProductComponent.vue';
import LifeProductComponent from '@/components/LifeProductComponent.vue';
import StarbuckProductComponent from '@/components/StarbuckProductComponent.vue';
import TrafficProductComponent from '@/components/TrafficProductComponent.vue';
import SearchResultComponent from '@/components/SearchResultComponent.vue'; // 新增的搜尋結果組件
import { ref } from 'vue';

const tabs = ref([
    { name: '全部', component: AllProductComponent },
    { name: '便利生活', component: LifeProductComponent },
    { name: '星巴克', component: StarbuckProductComponent },
    { name: '旅遊交通', component: TrafficProductComponent },
    { name: '', component: SearchResultComponent }, // 新增的搜尋結果 tab
]);

const currentIndex = ref(0);
const currentTab = ref(tabs.value[0].component);

// 搜尋關鍵字
const searchKeyword = ref('');

// 切換選項
const click = idx => {
    currentIndex.value = idx;
    currentTab.value = tabs.value[idx].component;

    // 如果切換到搜尋結果 tab，清空搜尋關鍵字
    if (idx === tabs.value.length - 1) {
        searchKeyword.value = ''; // 清空搜尋關鍵字以便重新搜尋
    }
};

// 處理搜尋
const handleSearch = () => {
    if (searchKeyword.value) {
        currentIndex.value = tabs.value.length - 1; // 切換到搜尋結果 tab
        currentTab.value = SearchResultComponent; // 顯示搜尋結果組件
    }
};
</script>

<template>
  <div>
    <!-- Navbar with Search -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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
          <form class="d-flex align-items-center" role="search" @submit.prevent="handleSearch">
            <input 
              class="form-control me-2" 
              type="search" 
              placeholder="搜尋物品" 
              aria-label="Search"
              v-model="searchKeyword"
              style="width: 200px;" 
            />
            <button class="btn btn-outline-success" type="submit" style="width: 80px;">搜尋</button> <!-- 設定按鈕寬度 -->
          </form>
        </div>
      </div>
    </nav>

    <!-- 顯示當前選擇的 tab -->
    <KeepAlive>
      <component :is="currentTab" :searchKeyword="searchKeyword"></component>
    </KeepAlive>
  </div>
</template>

<style lang="css" scoped>
.card {
  margin-bottom: 20px;
  border: none;
}

.product-image-wrapper {
  border: 2px solid #007BFF;
  padding: 5px;
}

.product-image {
  width: 100px;
  height: auto;
}

.point-img {
  width: 20px;
  height: auto;
  margin-right: 5px;
}

.point-text {
  font-size: 18px;
}

.card-title {
  font-size: 14px;
}

.navbar-nav .nav-item .nav-link.active {
  color: #007BFF;
}
</style>
