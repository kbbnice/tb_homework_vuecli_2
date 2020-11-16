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
        component: () => import('../views/404.vue'),
        meta: {
          title: "404"
        }
      },
      {
        path: 'member/teacher',

        component: () => import('../views/member/Teacher.vue'),
        meta: {
          title: "老师列表",
        }

      },
      {
        path: 'member/student',

        component: () => import('../views/member/Student.vue'),
        meta: {
          title: "学生列表",

        }
      },
      {
        path: 'settings/password',

        component: () => import('../views/settings/Password.vue'),
        meta: {
          title: "密码修改",
        }
      },
      {
        path: 'settings/info',

        component: () => import('../views/settings/Info.vue'),
        meta: {
          title: "个人信息",
        }
      },
      {
        path: '/',

        component: () => import('../views/settings/Info.vue'),
        meta: {
          title: "个人信息",
        }
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
    if (!userInfo) {
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

const RouterPush = VueRouter.prototype.push;

VueRouter.prototype.push = function push(location) {

  return RouterPush.call(this, location).catch(err => err)

}

export default router



