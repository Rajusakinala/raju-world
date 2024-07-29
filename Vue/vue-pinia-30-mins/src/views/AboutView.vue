<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="$router.go(-1)">back</button>
    <RouterLink to="/">Home</RouterLink>
  </div>
</template>
<script>
// import { RouterLink, RouterView } from "vue-router";
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
