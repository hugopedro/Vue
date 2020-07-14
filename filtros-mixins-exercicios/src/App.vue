<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<p>{{ cpf | cpf | inverter }}</p> <!-- o pipe | faz mostrar com os filtros, o da esquerda é o valor bruto e segundo 'arrumado'-->
		<input type="text" :value="cpf | cpf">
		<hr>
		<Frutas />
		<hr>
		<div>
			<ul>
				<li v-for="fruta in frutas" :key="fruta"> {{ fruta }}</li>
			</ul>
			<input type="text" v-model="fruta" @keydown.enter="add">
 		</div>
	</div>
</template>

<script>
import Frutas from './Frutas.vue'
export default {

	components: { Frutas },
	filters: {
		cpf(valor) { //filtro é uma funcao que recebe um valor e transforma e retorna
			const arr = `${valor}`.split('')
			arr.splice(3, 0, '.')
			arr.splice(7, 0, '.')
			arr.splice(11, 0, '-')
			return arr.join('') // array transformado em string
		}
	},
	data() {
		return {
			cpf: '25987456988',
			fruta: '',
            frutas: ['banana', 'maça', 'laranja']
		}
	},
	methods: {
        add() {
            this.frutas.push(this.fruta)
            this.fruta = ''
        }
    }

}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}

input {
	font-size: 2.5rem;
}


</style>
