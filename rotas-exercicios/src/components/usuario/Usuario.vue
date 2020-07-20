<template>
  <div class="usuario">
      <h2>Usuários</h2>
      <hr>
      <p><strong>Código: </strong> {{ id }}</p>
    <button sucesso @click="irParaInicio">Voltar</button>
  </div>
</template>

<script>
export default {
    props: ['id'],  
    
    // data() { //método ultrapassado de passar parâmetro
    //     return {
    //         id: this.$route.params.id
    //     }
    // },
    // watch: { // serve para nao bugar ao trocar de id
    //     $route(to, from) {
    //         this.id = to.params.id
    //     }
    // },
    methods: {
        irParaInicio() {
            // this.$router.push('/')
            this.$router.push({ path: '/' }) //dá na mesma
        }
    }
}
</script>

<style>

</style>