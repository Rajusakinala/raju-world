<template>
  <!-- <v-app> -->
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
        <v-btn @click="$router.push('/products')"> Products </v-btn>
        <v-btn @click="$router.push('/stories')"> Stories </v-btn>
        <v-btn @click="$router.push('/mail')">
          <v-icon>home</v-icon>
          <!-- <span class="material-symbols-outlined"> home </span> -->
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn
          style="margin: 12px"
          @click="$router.push('/profile')"
          color="blue"
          variant="outlined"
          >Profile
        </v-btn>
        <v-btn @click="logout()" color="red" variant="outlined">logout </v-btn>
      </v-toolbar>
    </v-card>
  </div>

  <!-- </v-app> -->
  <v-app>
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list-item
        @click="$router.push('/profile')"
        prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
        :title="user.name"
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
</template>

<script setup>
import { ref, toRef } from "vue";
const drawer = ref(false);

import defineProps from "vue";
const props = defineProps(["user"]);
const user = toRef(props.user);

function logout() {
  localStorage.removeItem("user");
  window.location.reload();
}
</script>

<style scoped></style>
