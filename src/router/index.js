import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    // 选择性别
    path: '/choice',
    name: 'choice',
    component: () => import('@/components/my/login/login-choice.vue')
  },
  {
    // 春暖阅读
    path: '/loginland',
    name: 'loginland',
    component: () => import('@/components/my/login/login-land.vue')
  },
  {
    path: '/name',
    name: 'name',
     component: () => import('../components/my/login/login.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  }
  
]

const router = new VueRouter({
  routes
})

export default router
