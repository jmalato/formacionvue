import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Buscaminas from '../views/Buscaminas.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/buscaminas',
    name: 'Buscaminas',
    component: Buscaminas
  }
]

const router = new VueRouter({
  routes
})

export default router
