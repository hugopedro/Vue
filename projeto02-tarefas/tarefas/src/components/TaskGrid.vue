<template>
  <div class="task-grid">
      <template>
          <!--nao pode aceitar duas tarefas com o mesmo nome entao vou por nome como chave -->
          <Task v-for="task in tasks" :key="task.name" :task="task"></Task>
          <!--gera as divs -->
      </template>
  </div>
</template>

<script>
import Task from './Task.vue'

export default {
    components: { Task },
    props: { 
                tasks: {type: Array, required: true }
           }
}
</script>

<style>

</style>