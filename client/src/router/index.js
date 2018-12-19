import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import List from '@/components/List'
import Create from '@/components/Create'
import Update from '@/components/Update'
import Card from '@/components/Card'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Root',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/create',
      name: 'Create',
      component: Create
    },
    {
      path: '/update/:id',
      name: 'Update',
      component: Update
    },
    {
      path: '/cards',
      name: 'Card',
      component: Card
    },
    {
      path: '*',
      redirect: { name: 'Root' }
    }
  ]
})
