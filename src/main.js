import { createApp } from 'vue' //???????
import Vue from 'vue';
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).mount('#app') //????????

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { 
      path: '/create-todo',
      name: 'create-todo',
      component: () => import('./components/AddTodo.vue')
    },
    { 
      path: '/show-list',
      name: 'show-list',
      component: () => import('./components/ListTodo.vue')
    },
    { 
      path: '/edit',
      name: 'edit',
      component: () => import('./components/UpdateTodo.vue')
    }
  ]
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
