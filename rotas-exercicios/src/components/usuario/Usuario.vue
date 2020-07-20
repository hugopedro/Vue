<template>
  <div class="usuario">
      <h2>Usuários</h2>
      <hr>
      <router-view />
    <button sucesso @click="irParaInicio">Voltar</button>
  </div>
</template>

<script>
export default {
    methods: {
        irParaInicio() {
            // this.$router.push('/')
            // this.$router.push({ path: '/' }) //dá na mesma
            this.$router.push({ name: 'inicio' }) //dá na mesma
        }
    }
}
</script>

<style>

</style>