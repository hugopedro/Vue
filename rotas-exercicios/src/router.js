import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import Usuario from './components/usuario/Usuario'

Vue.use(Router) // atenção aqui pois é com letra maiuscula

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: Inicio
    }, {
        path: '/usuario',
        component: Usuario
    }]
})