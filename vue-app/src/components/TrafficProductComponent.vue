<template>
    <div>
      <!--<h2>所有商品</h2>-->
  
      <div class="row mt-4"></div> <!--往下一點-->
  
      <div class="row">
        <div class="col-3" v-for="product in products" :key="product.productno">
          <div class="card" style="width: 18rem; border: none;"> <!-- 去掉card的外框顏色 -->
  
            <!-- 商品圖片區塊，外框顏色 -->
            <div class="product-image-wrapper" style="border: 1px solid lightgray; padding: 5px;">
              <img :src="'http://localhost:8081' + product.productimage" class="card-img-top" alt="product image">
            </div>
            <div class="card-body">
              
              <!-- 商品名稱的大小 -->
              <h5 class="card-title" style="font-size: 14px;">{{ product.productname }}</h5> 
  
              <!-- 顯示需要點數：圖片 + 數字，放大點數 -->
              <div style="display: flex; align-items: center; font-size: 18px;"> <!-- 放大點數 -->
                <img src="http://localhost:8081/BonusMallPic/point.jpg" alt="point image" class="point-img">
                <span class="point-text">{{ product.cost }} 點</span>
              </div>
  
              <div class="row mt-3"></div>
              <!-- 兌換商品的按鈕 -->
              <a href="#" class="btn" style="background-color: #ff5733; color: white;">兌換商品</a>
  
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [], // 存放從後端獲取的商品資料
      };
    },
    methods: {
      getAllProducts() {
        fetch("http://localhost:8081/api/bonusproduct/filter?category=旅遊交通")
          .then(response => response.json())  // 解析 JSON 資料
          .then(data => {
            console.log("API response:", data);  // 檢查返回的數據
            this.products = data;  // 更新 products
          })
          .catch(error => {
            console.error("Error fetching products: ", error);
          });
      },
    },
    mounted() {
      this.getAllProducts();
    },
  };
  </script>
  
  <style scoped>
  .card {
    margin-bottom: 20px;
    border: none; /* 去掉card的外框顏色 */
  }
  
  .product-image-wrapper {
    border: 2px solid #007BFF;  /* 設定圖片外框顏色 */
    padding: 5px;  /* 增加一些間距 */
  }
  
  .product-image {
    width: 100px;  /* 設定圖片寬度 */
    height: auto;  /* 高度自動調整 */
  }
  
  .point-img {
    width: 20px;  /* 設定點數圖片寬度 */
    height: auto; /* 高度自動調整 */
    margin-right: 5px; /* 點數圖片和數字之間的間距 */
  }
  
  .point-text {
    font-size: 18px;  /* 放大點數文字，調整點數大小 */
  }
  
  .card-title {
    font-size: 14px;  /* 商品名稱縮小字體 */
  }
  </style>
  