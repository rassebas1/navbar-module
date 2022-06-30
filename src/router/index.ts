
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Navbar from "../view/Navbar.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name:"navbar",
    component: Navbar,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
