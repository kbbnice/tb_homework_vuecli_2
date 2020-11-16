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
        path: '/',

        component: () => import('../views/Home.vue'),
        meta: {
          title: "首页",
        }

      },
      {
        path: '/course/add',

        component: () => import('../views/course/Add.vue'),
        meta: {
          title: "老师列表",
        }

      },
      {
        path: 'course/list',

        component: () => import('../views/course/List.vue'),
        meta: {
          title: "学生列表",

        }
      },
      {
        path: '/admin/password',

        component: () => import('../views/admin/Password.vue'),
        meta: {
          title: "密码修改",
        }
      },
      {
        path: '/admin/about',

        component: () => import('../views/admin/About.vue'),
        meta: {
          title: "个人信息",
        }
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
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



