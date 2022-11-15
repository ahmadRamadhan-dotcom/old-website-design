import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/facebook",
    name: "Facebook",
    component: () => import("@/views/facebook/home/FacebookView.vue"),
  },
  {
    path: "/netflix",
    name: "Netflix",
    component: () => import("@/views/netflix/NetflixView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
