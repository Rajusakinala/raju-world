<template>
  <div>{{ name }}</div>

  <div @click="setName">
    <button>Set Name</button>
  </div>

  <HelloWorld msg="Welcome to Your Vue.js App" :setName="setName" />
</template>

<script setup>
import { ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

let name = ref("Parent component");
const setName = () => {
  name.value = "Parent component updated";
  console.log("name", name);
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
