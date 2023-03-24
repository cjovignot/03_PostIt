import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OnePost from '../views/OnePost.vue'
import EditPost from '../views/EditPost.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/onepost/:id',
      name: 'onepost',
      component: OnePost
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: EditPost
    }
  ]
})

export default router
