<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuario: <strong> {{ inverterNome() }}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
    </div>
</template>

<script>
export default {
   /* Define a propiedade associada ao componente!
    * Diz ao UsuarioInfo.vue que aceita receber uma propiedade nome
    * entao o {{ nome }} da linha 5 vai vir apartir da propiedade nome abaixo e passa-se a propiedade
    * no momento que cria a Tag de um componente, no caso no Usuario.Vue linha 8
    * A comunicação do componente pai e do componente filho é por causa das propiedades props */
    props: {
        nome: {
            type: String, //o nome do tipo tem que ser em letra maiuscula 
            default: 'Anonimo' //se nao haver nada (no usuario linha 8 :nome etc...)o padrão é Anonimo 
            //required: true // Exige que string é requerido
        }
        // ao definir o tipo garante que a mensagem de erro fale que um tipo errado foi passado por parametro
        // Exemplo: (Usuario.vue linha 9)
    },
    methods: {
        inverterNome() {
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome() {
            const antigo = this.nome
            this.nome = 'Pedro'
            //Fazer com que o componente filho "conheça" o pai, disparando um evento
            this.$emit('nomeMudou', { // tambem pode passar um objeto!, lá no usuario.vue lê pelo $event
                novo: this.nome,
                antigo
            })
            //se o componente-pai estiver interessado em ouvir esse evento, deve-se por @NomedoEvento = "" (ver no usuario.vue)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
