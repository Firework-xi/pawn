import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Bookrack from '@/components/bookrack/bookrack.vue'
import Search from '@/components/search/index.vue'

import read from '@/components/bookrack/read.vue'
import bulkbuying from '@/components/bookrack/bulkbuying.vue'

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
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  // 选择性别
  {
    path: '',
    name: 'choice',
    component: () => import('@/components/my/login/login-choice.vue')
  },
  {
    // 春暖阅读
    path: '/loginland',
    name: 'loginland',
    component: () => import('@/components/my/login/login-land.vue'),
    meta: { index: 1 }
  },
  {
    // 未登录
    path: '/Login',
    name: 'Login',
    component: () => import('../components/my/login/login.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { index: 2 },
    children: [
      {
        path: '/my',
        name: 'my',
        component: () => import('@/components/my/my.vue'),
        meta: { index: 2 }
      },
      {
        path: '/booktown',
        name: 'booktown',
        component: () => import('@/components/booktown/booktown'),
        meta: { index: 1 }
      }
    ]
  },

  {
    path: '/particulars',
    name: 'particulars',
    component: () => import('@/components/book/particulars.vue'),
    meta: { index: 3 }
  },
  {
    // 阅读详情
    path: '/read',
    name: 'read',
    component: read,
    meta: { index: 4 }
  },
  {
    // 批量购买
    path: '/bulkbuying',
    name: 'bulkbuying',
    component: bulkbuying,
    meta: { index: 5 }
  },
  {
    path: '/my-count',
    name: 'my-count',
    component: () => import('@/components/my/my-count'),
    meta: { index: 3 }
  },
  {
    path: '/my-set',
    name: 'my-set',
    component: () => import('@/components/my/my-set'),
    meta: { index: 3 }
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
