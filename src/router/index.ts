import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/BigScreen',
      name: 'BigScreen',
      component: () => import('@/views/BigScreen.vue')
    },
    {
      path: '/ManagementClient',
      name: 'ManagementClient',
      component: () => import('@/views/ManagementClient.vue')
    },
  ]
})

export default router
