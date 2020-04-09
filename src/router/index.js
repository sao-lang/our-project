import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

import Recommend from '@/views/Recommend'
const routes = [{
    path: '/index',
    component: Recommend
}, {
    path: '/',
    redirect: '/index'
}]

const router = new VueRouter({
    routes
})

export default router