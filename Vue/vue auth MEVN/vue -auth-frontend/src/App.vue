<template>
  <div v-if="!user">Wellcome Vue Application</div>
  <div v-if="user">Hi.. {{ user?.name }}, Wellcome Vue Application</div>
  <div v-if="!user">
    <LoginViewVue />
  </div>
  <div v-if="user">
    <DashboardViewVue :user="user" />
    <RouterView />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import DashboardViewVue from "./views/DashboardView.vue";
import LoginViewVue from "./views/LoginView.vue";

// const user = ref(true);
const user = ref(null);
onMounted(() => {
  user.value = JSON.parse(localStorage.getItem("user"));
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 5px;
}
</style>
