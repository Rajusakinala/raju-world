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
import { ref } from "vue";
import axios from "axios";
const email = ref("");
const password = ref("");

function submit() {
  axios
    .post("http://localhost:4000/api/v1/user/login", {
      // email: email.value,
      email: email.value.trim(),
      password: password.value,
    })
    .then(({ data }) => {
      localStorage.setItem("user", JSON.stringify(data));
      window.location.reload();
    })
    .catch((err) => console.log("err :>> ", err));
}
</script>

<style scoped></style>
