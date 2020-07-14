<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo">
			<div class="painel" v-if="!enviado">
				<div class="cabecalho">Formulário</div>
				<!-- Exercicio 01 -->
				<!-- Criar uma formulário de registro -->
				<!-- Nome completo (Nome e Sobrenome) -->
				<!-- Email -->
				<!-- Senha -->
				<!-- Armazenar Dados? (Sim/Não) -->

				<!-- Exercicio 02 -->
				<!-- Só mostrar o fomulário de não tiver sido submetido -->
				<!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->
				
				<!-- Exercicio 03 -->
				<!-- Crie um componente personalizado NomeCompleto -->
				<!-- Esse componente deve receber Nome e Sobrenome -->
				<NomeCompleto />
				<Rotulo nome="Email">
					<input type="text" v-model="usuario.email">
				</Rotulo>
				<Rotulo nome="Senha">
					<input type="password" v-model="usuario.senha">
				</Rotulo>
				<Rotulo nome="Armazenar Dados? (Sim/ Não)">
					<input type="checkbox" v-model="usuario.armazenarDados">
				</Rotulo>
				<hr>
 				<button @click.prevent="enviar">Enviar</button>
			</div>
			<div class="painel">
				<div class="cabecalho">Resultado</div>
			<Rotulo nome="Nome Completo">
				<span>{{ usuario.nomeCompleto }}</span>
			</Rotulo>
			<Rotulo nome="Email">
				<span>{{ usuario.email }}</span>
			</Rotulo>
			<Rotulo nome="Senha">
				<span>{{ usuario.senha }}</span>
			</Rotulo>
			<Rotulo nome="Armazenar Dados? (Sim/ Não)">
				<span>{{ usuario.armazenarDados }}</span>
			</Rotulo>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'
import Escolha from './components/Escolha.vue'
import NomeCompleto from './components/NomeCompleto.vue'

export default {
	name: 'app',
	components: {NomeCompleto, Rotulo, Escolha },

		methods: {
			enviar() {
				this.enviado = true
			}
		},
	data() {
		return {
			usuario: { // é bom por os dados aqui pra ficar claro, mas se nao por ainda funciona
				email: '',
				senha: '',
				nomeCompleto: '',
				armazenarDados: true
			},
			enviado: false,
			
		}
	}
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

.panel button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
