import { createRouter, createWebHistory } from "vue-router";
// import DashboardView from "../views/DashboardView.vue";

const router = createRouter({
  //   history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/products",
      name: "products",
      component: () => import("../views/ProductsView.vue"),
    },
    {
      path: "/products/:productId",
      name: "productId",
      component: () => import("../views/ProductIdView.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/UserProfile.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

export default router;
