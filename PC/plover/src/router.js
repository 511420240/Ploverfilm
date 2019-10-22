import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Play from './views/Play-page.vue'
import Detail from './views/detail.vue'

import Reg from './views/Reg.vue'
import Login from './views/Login.vue'
import Upload from './views/Upload.vue'
import Souso from './views/sousopage.vue'
// import Space from  './views/Space.vue'





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
      path: '/souso',
      name: 'sousopage',
      component: Souso
    },
    

    {
      path: '/play',
      name: 'play',
      component: Play
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
     path: '/detail',
      name: 'detail',
      component: Detail
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
