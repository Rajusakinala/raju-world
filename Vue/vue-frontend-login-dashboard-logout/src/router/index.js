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
      path: "/posts",
      name: "posts",
      component: () => import("../views/UserPosts.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/UserProfile.vue"),
    },
  ],
});

export default router;
