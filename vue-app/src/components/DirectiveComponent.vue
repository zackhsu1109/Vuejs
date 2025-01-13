<script setup>
import { ref } from 'vue';

const message = ref("<h3>directive v-text</h3>")
const isLoading = ref(false)
const isLogin = ref(true)
// setTimeout(()=>{
//    isLoading.value = false
// },3000)
const selectedOption = ref("116")
const regions = ref([
  { "name": "中山區", "code": 104 },
  { "name": "大安區", "code": 106 },
  { "name": "信義區", "code": 110 },
  { "name": "內湖區", "code": 114 },
  { "name": "士林區", "code": 111 },
  { "name": "中正區", "code": 100 },
  { "name": "松山區", "code": 105 },
  { "name": "北投區", "code": 112 },
  { "name": "大同區", "code": 103 },
  { "name": "文山區", "code": 116 },
  { "name": "南港區", "code": 115 },
  { "name": "萬華區", "code": 108 }
]);

const bgColor = ref('green')
const radius = ref('50px')
const fontSize = ref(16)
const fontColor = ref('black')
const isBold = ref(false)
const isUnder = ref(false)
const isItalic = ref(false)

const items = ref([])
</script>

<template>
  <div>
    <h2>指令介紹</h2>
    <div>{{ message }}</div>
    <div v-text="message"></div>
    <div v-html="message"></div>
    <img src="/images/loading.gif" alt="loading" v-show="isLoading" />
    <img src="/images/loading.gif" alt="loading" v-if="isLoading" />
    <div v-if="isLogin">
      <p>isLogin 為 true</p>
      <button @click="isLogin = !isLogin">登出</button>
    </div>
    <div v-else>
      <p>isLogin 為 false</p>
      <button @click="isLogin = !isLogin">登入</button>
    </div>
    <h3>v-for</h3>
    <select v-model="selectedOption">
      <option v-for="(region, index) in regions" :key="region.code" :value="region.code">{{ index }} {{ region.name }}
      </option>

    </select><span>{{ selectedOption }}</span>

    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" v-for="i in 10" :key="i"><a class="page-link" href="#">{{ i }}</a></li>
      </ul>
    </nav>
    <h3>使用樣式</h3>
    <div style="width:200px;height:200px;border:1px solid green;"
      :style="{ 'background-color': bgColor, 'border-radius': radius }"></div>
  </div>

  <input type="checkbox" v-model="isBold">粗體
  <input type="checkbox" v-model="isItalic">斜體
  <input type="checkbox" v-model="isUnder">下底線
  <button @click="fontSize += 2">A+</button>
  <button @click="fontSize -= 2">A-</button>
  <input type="color" v-model="fontColor" />
  <p :class="{ bold: isBold, underline: isUnder, italic: isItalic }" :style="{ fontSize: `${fontSize}px`, color: fontColor }">
    樣式套用</p>

  <input type="checkbox" value="i1" v-model="items">Item1
  <input type="checkbox" value="i2" v-model="items">Item2
  <input type="checkbox" value="i3" v-model="items">Item3
  <p>{{ items }}</p>
</template>

<style lang="css" scoped>
.bold {
  font-weight: bold;
}

.underline {
  text-decoration: underline;
}

.italic {
  font-style: italic;
}
</style>