import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Bookrack from '@/components/bookrack/bookrack.vue'

Vue.use(VueRouter)

const routes = [
  {
    component: Home,
    path: '/',
    redirect: '/bookrack',
    children: [
      {
        path: '/particulars',
        name: 'particulars',
        component: () => import('../views/book/particulars.vue')
      }, // 二级书本详情路由
      {
        path: '/bookrack',
        name: 'Bookrack',
        component: Bookrack
      }
    ]
  }

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
