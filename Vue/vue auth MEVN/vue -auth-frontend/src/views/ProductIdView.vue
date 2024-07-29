<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
const product = ref({});

// const router = useRouter();
const route = useRoute();

onMounted(() => {
  // const url = window.location.href.split('/')

  axios
    // .get(`http://localhost:5006/products/${url[url.length - 1]}`)
    .get(`http://localhost:4000/products/${route.params.productId}`)
    .then((res) => (product.value = res.data))
    .catch((err) => console.log("err :>> ", err));
});
</script>

<template>
  <div>
    <h4>{{ product.productCategory }} : {{ product.productName }}</h4>
    <img :src="product.productImage" :alt="product.productName" />
    <h5>
      Product Price {{ product.productCurency }} {{ product.productPrice }}/-
    </h5>
    <h5>{{ product.productDesc }}</h5>
  </div>

  <div @click="$router.go(-1)">Go Back</div>
</template>

<style scoped>
.button {
  color: red;
}
.button:hover {
  color: blue;
}
</style>
