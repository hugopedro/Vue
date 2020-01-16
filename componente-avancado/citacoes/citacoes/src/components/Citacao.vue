<template>
    <div class="citacao">
        <slot></slot> <!--slot faz com que possa exibir aquilo que foi passado dentro do corpo do componente -->
    </div>
</template>

<script>
export default {
    props: ['texto']
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }
</style>
