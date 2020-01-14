<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>Nome é <strong>{{nome}}</strong></p>
        <p>Idade é <strong>{{idade}}</strong></p>
        <button @click="alterarNome">Alterar Nome</button>
        <hr>
        <div class="componentes"> <!--binda o valor definido como nome -->
        <!--o nome tem que ser do tipo definido, se for mudar de tipo vai dar erro -->
            <app-usuario-info 
                :nome = "nome"
                :idade = "idade"
                @nomeMudou = "nome = $event.novo"
                :reiniciarFn="reiniciarNome" 
            /> <!--ele pode ler objetos, nesse caso é o obj novo lá da linha 34 do usuarioinfo -->
            <app-usuario-editar 
            :idade="idade" 
            @idadeMudou="idade = $event + 1"
            />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data() {
        return {
            nome: 'Pedro',
            idade: 21
        }
    },
    methods: {
        alterarNome() {
            this.nome = 'Ana'
        },
        reiniciarNome() {
            this.nome = 'Pedro'
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
