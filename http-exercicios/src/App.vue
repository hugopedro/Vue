<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-card>
			<b-form-group label="Nome">
				<b-form-input type="text" size="lg"
				v-model="usuario.nome"
				placeholder="Informe o nome"></b-form-input>
			</b-form-group>
			<b-form-group label="E-mail:">
				<b-form-input type="email" size="lg"
				v-model="usuario.email"
				placeholder="Informe o email"></b-form-input>
			</b-form-group>
			<hr>
			<b-button @click="salvar"
				size="lg" variant="primary">Salvar</b-button>
				<b-button @click="obterUsuarios"
				size="lg" variant="success" class="ml-2">Obter Usuarios</b-button> <!-- ml-2 de margin left 2, pro botao n grudar-->
		</b-card>
		<hr>
		<b-list-group>
			<b-list-group-item v-for="(usuario,id) in usuarios" :key="id">
				<strong>Nome:</strong> {{ usuario.nome }} <br>
				<strong>Email: </strong> {{ usuario.email }} <br>
				<strong>ID: </strong> {{ id }}
				<b-button variant="warning" size="lg"
				@click="carregar(id)">Carregar</b-button>
				<b-button variant="danger" size="lg" class="ml-2"
				@click="excluir(id)">Excluir</b-button>
				</b-list-group-item> <br>
		</b-list-group>
	</div>
</template>

<script>
export default {
	data() {
		return {
			usuarios: [],
			id: null,
			usuario: {
				nome: '',
				email: ''
			}
		}
	},
	methods: {
		limpar() {
			this.usuario.nome = ''
			this.usuario.email = ''
			this.id = null
		},
		carregar(id) {
			this.id = id
			this.usuario = { ...this.usuarios[id] }
		},
		excluir(id) { //depois de excluir then (entao) limpa
			this.$http.delete(`/usuarios/${id}.json`).then(_ => this.limpar())
		},
		salvar() {
			const metodo = this.id ? 'patch' : 'post' // se o método tiver setado ele faz "patch" se nao "post"
			const finalUrl = this.id ? `/${this.id}.json` : '.json'
			this.$http[metodo](`/usuarios${finalUrl}`, this.usuario) //` é concatenar
				.then(_ => this.limpar()) //agora o método salvar serve tanto para alterar um elemento tanto para incluir novos el.
		},

		obterUsuarios() { // consultar com get, nao precisa por .get após o $http que vai direto
			this.$http('usuarios.json').then(res => {
				this.usuarios = res.data
			})
		}
	}
			// created() {
			// 	this.$http.post('usuarios.json', {
			// 		nome: 'Maria',
			// 		email: 'maria_maria@gmail.com'
			// 	}).then(res => console.log(res))
			// }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
