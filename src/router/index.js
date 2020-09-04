import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')  
  },
  {
    path: '/post',
    name: 'Post',
    component: () => import('../views/Post.vue'), 
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')  
  },
  {
      path: '*',
       component: () => import('../views/404.vue'),
      hidden: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
