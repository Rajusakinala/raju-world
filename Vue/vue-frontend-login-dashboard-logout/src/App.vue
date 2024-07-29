<template>
  <div>Wellcome Vue Application</div>
  <div v-if="!userAuthenticated">
    <LoginViewVue :setUserAuthenticated="setUserAuthenticated" />
  </div>
  <div v-if="userAuthenticated">
    <DashboardViewVue :setUserAuthenticated="setUserAuthenticated" />
    <RouterView />
  </div>
</template>

<script setup>
import { ref } from "vue";
import DashboardViewVue from "./views/DashboardView.vue";
import LoginViewVue from "./views/LoginView.vue";

const userAuthenticated = ref(true);
// const userAuthenticated = ref(false);

const setUserAuthenticated = (LoginCondition) => {
  userAuthenticated.value = LoginCondition;
};
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
