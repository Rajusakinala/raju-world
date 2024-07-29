<template>
  <div>1</div>
  <HelloWorld />
  <HelloWorld>from App vue</HelloWorld>
  <div>2</div>
  <HelloWorld2 />
  <HelloWorld2>
    <template v-slot:slot1>from App vue</template>

    <!-- <template v-slot:slot3>from App vue for xyz</template> -->
    <template #slot2>from App vue for xyz</template>
  </HelloWorld2>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import HelloWorld2 from "./components/HelloWorld2.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    HelloWorld2,
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
