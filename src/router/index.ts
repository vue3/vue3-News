import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<any> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/vue",
    name: "Vue Info",
    component: () =>
      import(/* webpackChunkName: "vueinfo" */ "../views/Vue.vue"),
  },
  {
    path: "/react",
    name: "React Info",
    component: () =>
      import(/* webpackChunkName: "vueinfo" */ "../views/React.vue"),
  },
  {
    path: "/vue3-pixel-art",
    name: "Pixel Art",
    component: () =>
      import(/* webpackChunkName: "vueinfo" */ "../views/PixelArt.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
