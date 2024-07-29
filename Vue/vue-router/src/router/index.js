import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  //   history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    // not found route path
    {
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: () => import("../views/NotfoundView.vue"),
    },
    {
      path: "/user",
      name: "only user",
      component: () => import("../views/UserView.vue"),
    },
    // not dynamic route path
    {
      path: "/user/:id",
      // path: "/user",
      name: "user",
      component: () => import("../views/UserView.vue"),
      children: [
        {
          path: "profile",
          component: () => import("../views/UserProfile.vue"),
        },
        {
          path: "posts",
          component: () => import("../views/UserPosts.vue"),
        },
      ],
    },
  ],
});

export default router;
