import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import LangSelector from '@/components/LangSelector'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Language',
      component: LangSelector
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
