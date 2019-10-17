import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Reg from './views/Reg.vue'
import Login from './views/Login.vue'
import Upload from './views/Upload.vue'
import Space from './views/Space.vue'
import history from './views/history.vue'
import subscrib from './views/subscrib.vue'
import Editinfo from './views/Editinfo.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/reg',
      name: 'reg',
      component: Reg
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/upload',
      name: '上传',
      component: Upload
    },
    {
      path: '/space',
      name: 'Space',
      component: Space
    },
    {
      path: '/history',
      name: '历史记录',
      component: history
    },
    {
      path: '/subscrib',
      name: '订阅',
      component: subscrib
    },
    {
      path: '/editinfo',
      name: '个人资料编',
      component: Editinfo
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
