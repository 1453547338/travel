import Vue from 'vue'
import Router from 'vue-router'
import '@/assets/styles/reset.styl'
import '@/assets/styles/base.styl'

import home from '@/page/home/home'
import login from '@/page/login/login'
import City from  '@/page/city/City'

Vue.use(Router)

export default  new  Router({
    routes:[
        {
        path: '/',
        name:'home',
        component:home
        }, {
         path:'/login',
         name:'login',
         component:login
        },{
            path:'/city',
            name:'City',
            component:City
        }
    ]

})