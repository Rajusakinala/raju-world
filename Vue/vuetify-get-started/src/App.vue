<template>
  <h1>Welcome</h1>
  <v-btn> Button </v-btn>
  <v-btn size="large" :ripple="false"> Button </v-btn>
  <v-btn size="x-large" variant="outlined"> Button </v-btn>
</template>

<script>
export default {
  name: "App",
  components: {},
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
