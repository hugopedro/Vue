<template>
  <div class="new-task">
      <input v-model="name" @keydown.enter="add" type="text">
      <button @click="add">+</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name: ''
        }
    },
    methods: {
        add() {
            // o objetivo do método adicionar é emitir um evento que foi adicionado ao elemento
            // é notificar o componente-pai (que é o app) que uma task foi adicionada
            // é o componente pai que tem os dados (App.vue linha 18), entao lá é pra adicionar uma nova lista de array
            this.$emit('taskAdded', {name:this.name})
            //alem de emitir o evento deseja-se limpar o valor do evento para poder emitir uma nova task
            this.name = '' //limpa o input
        }
    }
}
</script>

<style>

</style>