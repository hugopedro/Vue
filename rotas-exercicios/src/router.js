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
        path: '/usuario/:id', //Significa que a rota nao é só usuário, agora é usuário/ algum numero
        component: Usuario,
        props: true //significa que todos oa parametros da rota serão passado como propiedade do componente
    }]
})