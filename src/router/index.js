import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/productDetails',
    name: 'ProductDetails',
    component: () => import('../views/productDetails.vue')
  },
  {
    path: '/orderGoods',
    name: 'OrderGoods',
    component: () => import('../views/orderGoods.vue')
  },
  {
    path: '/shoppingCart',
    name: 'ChoppingCart',
    component: () => import('../views/shoppingCart.vue')
  },
  {
    path: '/collect',
    name: 'Collect',
    component: () => import('../views/collect.vue')
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('../views/mine.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
