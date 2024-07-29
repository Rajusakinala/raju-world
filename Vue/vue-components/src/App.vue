<template>
  <h2>Vue components</h2>
  <button @click="comp = 'CompAVue'">Component A</button>
  <button @click="comp = 'CompBVue'">Component B</button>
  <div></div>
  <component :is="comp" />
</template>

<script>
import CompAVue from "./components/CompA.vue";
import CompBVue from "./components/CompB.vue";
// const comp = ref('CompAVue')
export default {
  components: {
    CompAVue,
    CompBVue,
  },
  data() {
    return {
      comp: "CompAVue",
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
