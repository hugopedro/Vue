<template>
  <div class="usuario-editar">
    <h3>Usuário Editar</h3>
    <p><strong>Código: </strong> {{ id }} / {{ $route.params.id }}</p>
    <p><strong>Completo: </strong> {{ $route.query.completo ? 'Sim' : 'Não' }}</p> <!-- pega os valores da query nos componentes que passaram a requisição-->
    <p><strong>Língua:</strong> {{ $route.query.lingua }}</p>
    <hr>
    <button primario>Confirmar</button> <!-- protegendo rotas -->
    <div class="rodape">
        <h3>Curso Vue</h3>
    </div>
  </div>
</template>

<script>
export default {
    props: ['id'], 
}
</script>

<style>
    #rodape {
        margin-top: 1000px;
    }
</style>