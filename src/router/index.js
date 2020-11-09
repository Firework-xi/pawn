import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import read from '@/components/bookrack/read.vue'
import bulkbuying from '@/components/bookrack/bulkbuying .vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/my',
        name: 'my',
        component: () => import('@/components/my/my.vue')
      }
    ]
  },
  {
    path: '/read',
    name: 'read',
    component: read,
    children: [
      {
        path: '/bulkbuying',
        name: 'bulkbuying',
        component: bulkbuying
      }
    ]
  },
  {
    path: '/my-count',
    name: 'my-count',
    component: () => import('@/components/my/my-count')
  },
  {
    path: '/particulars',
    name: 'particulars',
    component: () => import('../views/book/particulars.vue')
  } // 二级书本详情路由

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
