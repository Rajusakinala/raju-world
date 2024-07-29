<script setup>
import axios from 'axios'
import { ref } from 'vue'
const products = ref([])
axios
  .get('http://localhost:5006/products')
  .then((res) => (products.value = res.data))
  .catch((err) => console.log('err :>> ', err))
</script>

<template>
  <!-- {{ console.log(products) }} -->
  <div>
    <h1>This is an Products page</h1>
  </div>
  <div
    v-for="(product, index) in products"
    :key="index"
    style="display: flex; flex-direction: row; justify-content: center"
  >
    <div
      @click="$router.push(`/${product.productId}`)"
      style="width: 400px; height: 220px; border: gray 2px dashed; margin: 12px; padding: 10px"
    >
      <h4>{{ product.productCategory }} : {{ product.productName }}</h4>
      <img
        style="width: 100px; height: 60px; border: 1px solid #ddd; border-radius: 4px; padding: 5px"
        :src="product.productImage"
        :alt="product.productName"
      />
      <h5>{{ product.productPrice }}</h5>
      <h5>{{ product.productDesc }}</h5>
    </div>
  </div>
</template>

<style></style>
