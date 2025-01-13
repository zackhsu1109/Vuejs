<script setup>
import { computed, ref } from 'vue';

    //取得使用者輸入資料
    const height = ref(0)
    const weight = ref(0)

    //資料計算 => computed
    const BMICalc = computed(()=>{
        if(weight.value > 0 && height.value > 0){
           const bmi = weight.value / Math.pow(height.value/100,2) 
           return bmi.toFixed(2)
        }else{
            return 0
        }
    })

</script>

<template>
    <!--使用者介面：HTML、CSS-->
    <div>
   <h2>BMI 計算</h2>
   <div><label>身高(公分)</label><input id="height" type="text" v-model.number.lazy="height" /></div>
   <div><label>體重(公斤)</label><input type="text" v-model.number.lazy="weight" /></div>
   <!--資料計算-->
   <!--顯示計算完的結果 Vue-->
   <div>BMI:{{weight / Math.pow(height/100,2) }}</div>
   <div>BMI:{{ BMICalc }}</div>
    </div>
</template>

<style lang="css" scoped>
label{
  margin-right: 10px;
}
</style>