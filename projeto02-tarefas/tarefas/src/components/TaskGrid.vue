<template>
  <div class="teste">
      <template>
          <!--nao pode aceitar duas tarefas com o mesmo nome entao vou por nome como chave -->
          <div v-for="task in tasks" :key="task.name">{{ task.name }}</div>
          <!--gera as divs -->
      </template>
  </div>
</template>

<script>
export default {
    props: { type: Array, required: true }
}
</script>

<style>

</style>