<template>
  <v-sheet width="300" class="mx-auto">
    <v-form fast-fail @submit.prevent="submit">
      <v-text-field v-model="email" label="Email"></v-text-field>

      <v-text-field
        type="password"
        v-model="password"
        label="Password"
      ></v-text-field>

      <v-btn type="submit" block class="mt-2">Login</v-btn>
    </v-form>
  </v-sheet>
</template>

<script setup>
import defineProps, { ref } from "vue";
const email = ref("");
const password = ref("");

const users = [
  { userName: "Raju", password: "1234", email: "raju@gmail.com" },
  { userName: "Ram", password: "1234", email: "ram@gmail.com" },
];

const props = defineProps(["setUserAuthenticated"]);
function submit() {
  const foundedUser = users.find((user) => user.email === email.value);
  if (foundedUser && foundedUser.password === password.value) {
    props.setUserAuthenticated(true);
  } else console.log("user not founded");
}
</script>

<style scoped></style>
