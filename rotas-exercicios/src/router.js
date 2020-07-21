import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import Menu from './components/template/Menu'
import MenuAlt from './components/template/Menu'
// import Usuario from './components/usuario/Usuario'
// import UsuarioLista from './components/usuario/UsuarioLista'
// import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
// import UsuarioEditar from './components/usuario/UsuarioEditar'

Vue.use(Router) // atenção aqui pois é com letra maiuscula, o webpack serve para usar na hora do agrupamento de componentes
// então isso é ótimo para grandes aplicações, pois só vai carregar o que for necessário na ocasião necessária
const Usuario = () => import(/* webpackChunkName: "usuario" */'./components/usuario/Usuario')
const UsuarioLista = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioDetalhe')
const UsuarioDetalhe = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioLista')
const UsuarioEditar = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioEditar') // é uma função callback, entao ele importa e guarda na variavel

const router =  new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else if(to.hash) {
            return { selector: to.hash }
        } else {
             return { x: 0, y: 1000}
        }

    },
    routes: [{
        name: 'inicio',
        path: '/',
        // component: Inicio
        components: {
            default: Inicio,
            menu: Menu
        }
    }, {
        path: '/usuario', //Significa que a rota nao é só usuário, agora é usuário/ algum numero
        // component: Usuario,
        components: {
            default: Usuario,
            menu: MenuAlt,
            menuInferior: MenuAlt
        },
        props: true, //significa que todos oa parametros da rota serão passado como propiedade do componente
        children: [
            { path: '', component: UsuarioLista},
            { path: ':id', component: UsuarioDetalhe, props: true,
                beforeEnter: (to, from, next) => {
                    console.log('antes da rota -> usuário detalhe')
                    next()
                }},
            { path: ':id/editar', component: UsuarioEditar, props: true,
                name: 'editarUsuario' },
        ]
    }, {
        path: '/redirecionar', //eé um testezinho, se for lá na url e por /redirecionar ele vai cair na pagina usuario
        redirect: '/usuario',
    },
        {
            path: '*', //pega qualquer coisa que for digitada na url
            redirect: '/' //redireciona pro inicio, é a rota "pega-tudo"
    }]
})

router.beforeEach((to, from, next) => {
    console.log('antes das rotas -> global')
        next()
})

export default router
