<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Test r="first propsss" />
  <Test2Page />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Test from "./components/Test.vue";
import Test2Page from "./components/Test2Page.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Test,
    Test2Page,
  },
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
