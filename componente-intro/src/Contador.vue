<!-- 
1) Cria-se um componente que é a parte do HTML (linha 5 a 11)
2) Faz a parte do javascript <script>
3) Registra o componente globalmente apartir de main usando import e chamando vue.component passando os valores.<template>
4) Entra-se no app.vue e usamos o componente criado, no caso     <app-contadores /> , ele tambem carrega qualquer coisa que ele referencie
-->
<script>
export default {

}
</script>

<style>

</style>

<template>
  <div class="contador">
    <span>{{ contador }}</span>
    <button @click="adicionar">+</button>
    <button @click="subtrair">-</button>
  </div>
</template>
<!-- o nome do arquivo é case sensitive, se nao obedecer nao vai chamar o arquivo -->
<script>
export default {
    data() {
        return {
            contador: 0
        }
    },
    methods: {
        adicionar() {
            this.contador++
        },
        subtrair() {
            this.contador--
        }
    }
}
</script>

<style scoped>
    span {
        border-bottom: 1px solid #CCC;
        height: 30px;
        padding: 5px 25px;
    }

    button[data-v-6cbbf471] {
        height: 30px;
        width: 30px;
        border-radius: 15px;
        background-color: coral;
        color: #fff;
        margin-left: 10px;
        outline: none;
    }
</style>