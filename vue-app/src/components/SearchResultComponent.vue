<template>
    <div>
        <div class="row mt-4">
            <div class="col-3" v-for="product in products" :key="product.productno">
                <div class="card" style="width: 18rem; border: none;">
                    <div class="product-image-wrapper" style="border: 1px solid lightgray; padding: 5px;">
                        <img :src="'http://localhost:8081' + product.productimage" class="card-img-top" alt="product image">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{{ product.productname }}</h5> 
                        <div style="display: flex; align-items: center; font-size: 18px;">
                            <img src="http://localhost:8081/BonusMallPic/point.jpg" alt="point image" class="point-img">
                            <span class="point-text">{{ product.cost }} 點</span>
                        </div>
                        <a href="#" class="btn" style="background-color: #ff5733; color: white;">兌換商品</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        searchKeyword: String // 接收來自父組件的搜尋關鍵字
    },
    data() {
        return {
            products: [], // 存放從後端獲取的商品資料
        };
    },
    watch: {
        // 當 searchKeyword 改變時觸發
        searchKeyword: {
            immediate: true, // 在組件創建時立即執行
            handler(newKeyword) {
                this.searchProducts(newKeyword); // 調用搜尋函數
            }
        }
    },
    methods: {
        searchProducts(keyword) {
            if (keyword.trim() !== '') { // 檢查關鍵字是否為空
                fetch(`http://localhost:8081/api/bonusproduct/search?keyword=${encodeURIComponent(keyword)}`) // 使用 API 獲取符合條件的商品
                    .then(response => response.json())
                    .then(data => {
                        console.log("API response:", data);
                        this.products = data; // 更新 products
                    })
                    .catch(error => {
                        console.error("Error fetching products:", error);
                    });
            } else {
                this.products = []; // 如果關鍵字為空，清空產品列表
            }
        }
    },
};
</script>

<style scoped>
.card {
    margin-bottom: 20px;
}
.product-image-wrapper {
    border: 2px solid #007BFF; /* 設定圖片外框顏色 */
}
.point-img {
    width: 20px; /* 設定點數圖片寬度 */
}
.point-text {
    font-size: 18px; /* 放大點數文字，調整點數大小 */
}
.card-title {
    font-size: 14px; /* 商品名稱縮小字體 */
}
</style>
