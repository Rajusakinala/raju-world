<template>
  <div>
    <v-card rounded="0">
      <v-toolbar>
        <v-app-bar-nav-icon
          @click="drawer = true"
          color="red"
          variant="outlined"
          >|||</v-app-bar-nav-icon
        >
        <v-btn @click="$router.push('/')"> Home </v-btn>
        <v-btn @click="$router.push('/posts')"> Posts </v-btn>
        <v-btn @click="$router.push('/stories')"> Stories </v-btn>
        <v-btn @click="$router.push('/mail')">
          <v-icon>home</v-icon>
          <!-- <span class="material-symbols-outlined"> home </span> -->
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn @click="logout()" color="red" variant="outlined">logout </v-btn>
      </v-toolbar>
    </v-card>
  </div>
  <!-- <div> -->
  <v-app style="height: 10px">
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list-item
        @click="$router.push('/profile')"
        prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
        title="User Name"
      ></v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-view-dashboard"
          title="Home"
          value="home"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-forum"
          title="About"
          value="about"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
  <!-- </div> -->
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(false);
console.log("drawer", drawer);

import defineProps from "vue";
const props = defineProps(["setUserAuthenticated"]);
function logout() {
  props.setUserAuthenticated(false);
}
</script>

<style scoped></style>
