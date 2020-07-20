<template>
  <div class="usuario-detalhe">
      <h3>Usuário Detalhe</h3>
      <p><strong>Código: </strong> {{ id }}</p>
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
}
</script>

<style>

</style>