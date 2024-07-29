<template>
  <div class="card flex justify-content-center">
    <label for="text">text</label>
    <InputText id="text" v-model="text" />
    <label for="name">Name</label>
    <InputText id="name" v-model="name" placeholder="enter here" />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "App",
  components: {},
  data() {
    return {
      name: "direct value",
      text: ref("refValue"),
    };
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
