import Vue from 'vue'
import Router from 'vue-router'
import '@/assets/styles/reset.styl'
import '@/assets/styles/base.styl'

import home from '@/page/home/home'


Vue.use(Router)
export default  new  Router({
    mode:'history',//除去localhost:8080的#号
    routes:[
        {
        path: '/',
        name:'home',
        component:home
        },
        // {
        //      path:'/list',
        //      name:'list',
        //      component:list
        // }
    ]

})