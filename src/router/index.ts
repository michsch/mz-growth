import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomepageHero from '../views/HomepageHero.vue'

const BASE_URL = import.meta.env.BASE_URL
const router = createRouter({
  history: createWebHistory(window.location.pathname),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/hero',
      name: 'hero',
      component: HomepageHero
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
