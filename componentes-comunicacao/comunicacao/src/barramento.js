import Vue from 'vue'
export default new Vue({
    methods: {
        alterarIdade(idade) {
            this.$emit('idadeMudou', idade)
            //gera o evento no usuarioEditar
        },
        quandoIdadeMudar(callback) {
            // essa função registra esse callback quando o evento acontecer
            //e ai chama a função alterarIdade
            this.$on('idadeMudou', callback)
        }
    }
})