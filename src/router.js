import Vue from 'vue'
import Router from 'vue-router'
import NotFound from './components/NotFound'
import AdminSimple from './components/AdminSimple.vue'
import AdminAvanzado from './components/AdminAvanzado.vue'
Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [
        {
            path: '/',
            name: 'inicio',
            component: () => import(/* webpackChunkName: "inicio" */ './components/Inicio.vue')
        },
        {
            path: '/inicio',
            redirect: {name: 'inicio'}
        },
        {
            path: '/portada',
            redirect: {name: 'inicio'}
        },
        {
            path: '/home',
            redirect: {name: 'inicio'}
        },
        {
            path: '/sobremi',
            name: 'sobremi',
            component: () => import(/* webpackChunkName: "sobremi" */ './components/SobreMi.vue'),
            alias: '/acerca'
        },
        {
            path: '/contacto',
            name: 'contacto',
            component: () => import(/* webpackChunkName: "contacto" */ './components/Contacto.vue'),
            alias: '/contactame'
        },
        {
            path: '/post',
            name: 'post',
            component: () => import(/* webpackChunkName: "post" */ './components/Post.vue'),
            
            children: [
                {
                    path: ':articulo',
                    component: () => import(/* webpackChunkName: "articulo" */ './components/Articulo.vue'),
                    
                }
            ]
        },
        {
            path: '/Administrador/simple',
            name: 'Administrador-Simple',
            component: AdminSimple,
        },
        {
            path: '/Administrador/Avanzado',
            name: 'Administrador-Avanzado',
            component: AdminAvanzado,
        },
        {
            path: '*',
            component: NotFound
        }
    ]
})