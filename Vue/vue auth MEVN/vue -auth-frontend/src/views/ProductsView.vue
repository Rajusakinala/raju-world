<template>
  <div>Products page</div>
  <div
    v-for="(product, index) in products"
    :key="index"
    style="display: flex; flex-direction: row; justify-content: center"
  >
    <div class="card" @click="$router.push(`/products/${product.productId}`)">
      <h4>{{ product.productCategory }} : {{ product.productName }}</h4>
      <img
        style="
          width: 100px;
          height: 60px;
          border: 1px solid #ddd;
          border-radius: 4px;
          padding: 5px;
        "
        :src="product.productImage"
        :alt="product.productName"
      />
      <h5>{{ product.productPrice }}</h5>
      <h5>{{ product.productDesc }}</h5>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
// import { useRouter } from "vue-router";
// const router = useRouter();

const products = ref(null);
onMounted(() => {
  axios
    .get("http://localhost:4000/products")
    .then(({ data }) => (products.value = data))
    .catch((err) => console.log("err :>> ", err));
});
// const clickHandler = () => {
//   console.log("clicked :>> ", "clicked");
// };
</script>

<style scoped>
.card {
  width: 400px;
  height: 220px;
  border: red 2px dashed;
  margin: 12px;
  padding: 10px;
}
.card:hover {
  border: rgb(14, 226, 88) 2px dashed;
}
</style>
