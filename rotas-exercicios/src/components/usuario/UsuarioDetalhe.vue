<template>
  <div class="usuario-detalhe">
      <h3>Usuário Detalhe</h3>
      <p><strong>Código: </strong> {{ id }}</p>
      <!-- :to="`/usuario/${id}/editar`" --> <!-- Pode ser só {{ id }} pois a props já tá definindo-->
      <router-link tag="button" primario
        :to="{ name: 'editarUsuario', params: {id } }" > <!-- tag button para renderizar, primario do style.css-->
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