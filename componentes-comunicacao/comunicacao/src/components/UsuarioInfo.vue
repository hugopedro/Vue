<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuario: <strong> {{ nome }}</strong></p>
    </div>
</template>

<script>
export default {
   /* Define a propiedade associada ao componente!
    * Diz ao UsuarioInfo.vue que aceita receber uma propiedade nome
    * entao o {{ nome }} da linha 5 vai vir apartir da propiedade nome abaixo e passa-se a propiedade
    * no momento que cria a Tag de um componente, no caso no Usuario.Vue linha 8
    * A comunicação do componente pai e do componente filho é por causa das propiedades props */
    props: ['nome']
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
