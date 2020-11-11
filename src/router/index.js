import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import read from '@/components/bookrack/read.vue'
import bulkbuying from '@/components/bookrack/bulkbuying.vue'

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
    component: Home,
    children: [
      {
        path: '/my',
        name: 'my',
        component: () => import('@/components/my/my.vue')
      },
      {
        path: '/booktown',
        name: 'booktown',
        component: () => import('@/components/booktown/booktown')
      }
    ]
  },

  {
    path: '/particulars',
    name: 'particulars',
    component: () => import('../components/book/particulars.vue')
  },
  {
    // 阅读详情
    path: '/read',
    name: 'read',
    component: read
  },
  {
    // 批量购买
    path: '/bulkbuying',
    name: 'bulkbuying',
    component: bulkbuying
  },
  {
    path: '/my-count',
    name: 'my-count',
    component: () => import('@/components/my/my-count')
  },
  {
    path: '/my-set',
    name: 'my-set',
    component: () => import('@/components/my/my-set')
  }

  // 二级书本详情路由

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

// {
//   path: '/about',
//   name: 'About',
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
// }

const router = new VueRouter({
  routes
})

export default router
