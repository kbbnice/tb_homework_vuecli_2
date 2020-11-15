import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Home,
    children: [
      {
        path: '404',
        component: () => import('../views/404.vue')
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {

  let userInfo = getStorage('userInfo')

  // 判断是否登录
  if (to.path === "/login") {
    next()
  } else {
    if(!userInfo) {
      next('/login')
    } else {
      next()
    }
  }
})

/**
* 获取 localstorage: 
* @param {String} key storageKey
*/
function getStorage(key) {
  return JSON.parse(window.localStorage.getItem(key))
}

export default router



