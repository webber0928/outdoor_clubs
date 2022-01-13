import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import('@/pages/LandingPage.vue'),
  },
  {
    path: "/about",
    name: "About",
    component: () => import('@/pages/About.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;