<template>
  <div>Welcome to vue Router</div>

  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink>&nbsp;
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </div>
  <div>
    <RouterView />
  </div>
</template>

<script setup></script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
  color: red;
  font-size: 16px;
  margin: 8px;
  padding: 3px;
  border: green 2px dashed;
  border-radius: 5px;
  background-color: aqua;
}
button:active {
  color: pink;
}

button:hover {
  color: blue;
  margin: 6px;
  padding: 5px;
  border: solid;
}
</style>
