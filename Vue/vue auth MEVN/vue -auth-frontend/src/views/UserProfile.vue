<template>
  <div class="profilepage">
    <div>Profile page</div>
    <div><label>Name :</label> {{ user?.name }}</div>
    <div><label>Number :</label> : {{ user?.number }}</div>
    <div><label>Email :</label> {{ user?.email }}</div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const user = ref(null);
onMounted(() => {
  user.value = JSON.parse(localStorage.getItem("user"));
});
</script>

<style scoped>
.profilepage {
  margin: 10px;
  padding: 10px;
  text-align: start;
  display: flex;
  /* flex-wrap: nowrap; */
  flex-direction: column;
}
label {
  font-weight: bold;
}
</style>
