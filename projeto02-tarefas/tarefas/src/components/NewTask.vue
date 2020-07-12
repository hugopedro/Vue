<template>
  <div class="new-task">
      <input v-model="name" @keydown.enter="add" type="text"
            class="form-element" placeholder="Nova tarefa?">
      <button class="form-element" @click="add">+</button>
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
            this.$emit('taskAdded', { name: this.name })
            //alem de emitir o evento deseja-se limpar o valor do evento para poder emitir uma nova task
            this.name = '' //limpa o input
        }
    }
}
</script>

<style>
    .new-task {
        margin:35px;
    }

    .form-element {
        outline:none;
        font-size: 2rem;
        border: 1px solid #FFF;
        padding: 5px 10px 8px;
        color: #FFF;
    }

    input.form-element {
        width: 500px;
        background: #fff2;
        border-top-left-radius: 8px ;
        border-bottom-left-radius: 8px;
    }

    button.form-element {
        border-left: none;
        background-color: cyan;
        border-top-right-radius: 8px;
        border-bottom-left-radius: 8px;
    }


</style>