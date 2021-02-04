import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeComponent from '../componentes/home/HomeComponent'
import TasksComponent from '../componentes/tasks/TasksComponent'

Vue.use(VueRouter)

const routes = [
    {path: '/', component: HomeComponent, name: 'home'},
    {path: '/tasks', component: TasksComponent, name: 'tasks'},
]

export default new VueRouter({
    mode: 'history',
    routes
})

