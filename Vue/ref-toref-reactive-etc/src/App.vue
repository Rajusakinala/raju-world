<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h3>{{ name2 }}</h3>
</template>

<script setup>
import { reactive } from "vue";
import { toRef } from "vue";
import { toRefs } from "vue";
// import { ref } from "vue";

// const myName1 = ref("raju");
// console.log("myName1 :>> ", myName1.value);

// const myName2 = reactive("raju");
// console.log("myName2 :>> ", myName2);

// // ref
// const person1 = ref({ name1: "first", age1: 28 });
// console.log("person :>> ", person1.value);
// person1.value.name1 = "second";
// let { name1 } = person1.value;
// console.log("name :>> ", name1);
// name1 = "third";
// console.log("name :>> ", name1);

// reactive
const person2 = reactive({ name2: "first", age2: 28 });
console.log("person :>> ", person2);
person2.name2 = "second";
let { name2 } = person2;
// console.log("name :>> ", name2);

let name2Ref = toRef(person2, "name2"); // toRef
console.log("name :>> ", name2Ref);

let person2AsRefs = toRefs(person2); // toRefs

console.log("person2AsRefs :>> ", person2AsRefs);
console.log("person2AsRefs.name2 :>> ", person2AsRefs.name2);
console.log("person2AsRefs.name2.value :>> ", person2AsRefs.name2.value);

// name2 = "third";
// console.log("name :>> ", name2);
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
