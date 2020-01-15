<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade do Usuario: <strong>{{ idade }}</strong></p> <!--se por inicial maiusculo nao vai rolar -->
        <button @click="alterarIdade">Alterar Idade</button>
    </div>
</template>

<script>
import barramento from '@/barramento'
export default {
    props: ['idade'],
    methods: {
        alterarIdade() {
            this.idade += 1
            barramento.alterarIdade(this.idade) //se ficar colocando com letra maiuscula, IdadeMudou vai quebrar tudo!!!!!
            //agora nao precia mais passar o nome do evento, só a idade
            //cuidado pra nao por $ sem querer em objetos como alterarIdade
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
