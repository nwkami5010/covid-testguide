// src/router/i18n.js
import Vue from 'vue'
import VueRouter from "vue-router";
import Home from '../views/Home';
import Guide from '../views/Guide';
import Test from  '../views/Test';
import Protocol from "@/views/Protocol";
//import About from '../views/About';
Vue.use(VueRouter)
export default new VueRouter({
    mode: 'hash',
    routes: [
        {
            path:'/',
            redirect: "/Guide"
        },
        {
            path: '/Home',
            component: Home
        },
        {
            path: '/Guide',
            component: Guide
        },
        {
            path: '/Test',
            component: Test,
        },
        {
            path:'/Protocol',
            component: Protocol
        },
        {
            path: '*',
            redirect: '/Guide'
        }
    ]
})