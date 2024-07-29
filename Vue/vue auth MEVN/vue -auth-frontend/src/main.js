import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

// import "material-design-icons-iconfont/dist/material-design-icons.css";
// import "@mdi/font/css/materialdesignicons.css";

// import Vue from "vue";
// import Vuetify from "vuetify";
// import "vuetify/dist/vuetify.min.css";

// Vue.use(Vuetify);
// import "vuetify/styles";

// Vuetify
import "vuetify/dist/vuetify.min.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

app.use(vuetify);

// pinia
import { createPinia } from "pinia";
const pinia = createPinia();
app.use(pinia);

// vue-router
import router from "./router";
app.use(router);

app.mount("#app");
