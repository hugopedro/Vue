<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<p>{{ usuarioLogado }}</p>
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

import frutasMixin from './frutasMixin'
import usuarioMixin from './usuarioMixin'
import Frutas from './Frutas.vue'

export default {

	components: { Frutas },
	mixins: [frutasMixin, usuarioMixin], //mixins significa mistura, faz uma mesclagem do que tá dentro do mixin com o componente
	filters: {
		cpf(valor) { //filtro é uma funcao que recebe um valor e transforma e retorna
			const arr = `${valor}`.split('') /*o objetivo do mixin é o re-uso de código */
			arr.splice(3, 0, '.')
			arr.splice(7, 0, '.')
			arr.splice(11, 0, '-')
			return arr.join('') // array transformado em string
		}
	},
	data() {
		return {
			cpf: '25987456988',
			frutas: ['abacate'] //esse teste prova que o que está dentro do componente tem mais prioridade do que está no mixin
		} // entao já que eu  declarei algo diferente as frutas que estavam no mixin somem, e fica só abacate
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
