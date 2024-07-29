<template>
  <div>
    <h1>{{ "child component" }}</h1>
    <h1>{{ msg }}</h1>
    <div @click="props.setName">
      <button>Set Name</button>
    </div>
  </div>
</template>

<script setup>
import defineProps from "vue";
const props = defineProps(["msg", "id", "setName"]);
// const props = defineProps({ msg: String });
console.log(props.setName);
</script>

<style scoped></style>
