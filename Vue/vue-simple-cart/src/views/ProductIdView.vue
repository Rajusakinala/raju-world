<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const product = ref({})

onMounted(() => {
  // const url = window.location.href.split('/')

  // const router = useRouter()
  // console.log('router :>> ', router)

  const route = useRoute()
  // console.log('route :>> ', route)
  // console.log('route.params :>> ', route.params)

  axios
    // .get(`http://localhost:5006/products/${url[url.length - 1]}`)
    .get(`http://localhost:5006/products/${route.params.productId}`)
    .then((res) => (product.value = res.data))
    .catch((err) => console.log('err :>> ', err))
})
</script>

<template>
  <div>
    <button @click="$router.go(-1)">Go Back</button>
  </div>
  <div>
    <h4>{{ product.productCategory }} : {{ product.productName }}</h4>
    <img :src="product.productImage" :alt="product.productName" />
    <h5>Product Price {{ product.productCurency }} {{ product.productPrice }}/-</h5>
    <h5>{{ product.productDesc }}</h5>
  </div>
</template>

<style scoped>
button {
  padding: 5px;
  margin: 10px;
}
</style>
