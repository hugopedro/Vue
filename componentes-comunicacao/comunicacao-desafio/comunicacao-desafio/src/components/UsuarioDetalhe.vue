<template>
    <div class="usuario-detalhe">
        <h2 v-if="!usuario">Usuário não selecionado!</h2>
        <div v-else>
            <h2>ID: {{ usuario.id }}</h2>
            <h2>Nome: {{ usuario.nome }}</h2>
            <h2>Idade: {{ usuario.idade }}</h2>
        </div>
    </div>
</template>

<script>
import barramento from '@/barramento'
export default {
    data() {
        return {
            usuario: null
        }
    }, //o created() é uma função de ciclo de vida que sempre será chamada quando o componente for criado
    //para poder fazer a amarração da função que será chamada quando um evento onUsuarioSelecionado acontecer
    created() { //barramento.onUsuarioSelecionado vai receber uma callback
    //encima do usuarioSelecionado vai setar o dado interno*usuario: null) do meu componente data()
    //uma vez mudado o dado interno o meu template <div class="usuario-detalhe"> vai refletir essas mudanças
        barramento.onUsuarioSelecionado(usuario => {
            this.usuario = usuario
        })
    }
}
</script>

<style>
    .usuario-detalhe {
        flex: 1;
        border: 1px solid #CCC;
    }
</style>
