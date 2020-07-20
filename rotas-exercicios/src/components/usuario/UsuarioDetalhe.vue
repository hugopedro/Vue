<template>
  <div class="usuario-detalhe">
      <h3>Usuário Detalhe</h3>
      <p><strong>Código: </strong> {{ id }}</p>
      <router-link tag="button" primario :to="`/usuario/${id}/editar`"> <!-- tag button para renderizar, primario do style.css-->
           Editar
      </router-link>
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