import { createRouter, createWebHashHistory } from "vue-router";
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
      import(/* webpackChunkName: "reactinfo" */ "../views/React.vue"),
  },
  {
    path: "/vue3-pixel-art",
    name: "Pixel Art",
    component: () =>
      import(/* webpackChunkName: "pixelartinfo" */ "../views/PixelArt.vue"),
  },
  {
    path: "/vue3-todomvc",
    name: "vue3 todomvc",
    props: (route: any) => ({ condition: route.query.q }),
    component: () =>
      import(/* webpackChunkName: "todosinfo" */ "../views/Todomvc.vue"),
  },
  {
    path: "/vue3-markdown",
    name: "vue3 markdown",
    component: () =>
      import(/* webpackChunkName: "narkdowninfo" */ "../views/Markdown.vue"),
  },
  {
    path: "/vue3-apexcharts",
    name: "vue3 apexcharts",
    component: () =>
      import(/* webpackChunkName: "narkdowninfo" */ "../views/ApexCharts.vue"),
  },
  {
    path: "/vue3-win10-DatePanel",
    name: "vue3 win10 DatePanel",
    component: () =>
      import(/* webpackChunkName: "narkdowninfo" */ "../views/Win10DatePanel.vue"),
  },
  // {
  //   path: "/vue3-svg",
  //   name: "vue3 svg",
  //   component: () =>
  //     import(/* webpackChunkName: "narkdowninfo" */ "../views/Svg.vue"),
  // },
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
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
