import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/facebook",
    name: "Facebook",
    component: () => import("@/views/facebook/home/FacebookView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
