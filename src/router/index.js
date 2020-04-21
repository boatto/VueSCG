import Vue from 'vue'
import VueRouter from 'vue-router'
import CV from '../views/CV.vue'
import Home from '../views/Home.vue'
import MAPI from '../views/MAPI.vue'

Vue.use(VueRouter)

const routes = [
{
path : '/',
name: 'Home',
component : Home

},
{
    path : '/CV',
    name: 'CV',
    component : CV
    
},
{
    path : '/MAPI',
    name: 'MAPI',
    component : MAPI
    
}

]

const router = new VueRouter({

    mode : 'history',
    base : process.env.BASE_URL,
    routes
})

export default router