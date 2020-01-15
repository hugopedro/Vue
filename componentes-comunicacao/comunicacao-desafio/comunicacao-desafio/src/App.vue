<template>
	<div id="app">
		<usuario-lista :usuarios="usuarios" />
		<usuario-detalhe />
	</div>
</template>

<script>
import UsuarioLista from './components/UsuarioLista.vue'
import UsuarioDetalhe from './components/UsuarioDetalhe.vue'

export default {
	name: "app",
	components: { UsuarioLista, UsuarioDetalhe },
    data() {
        return {
            usuarios: [
                { id: 1, nome: 'Ana', idade: 31 },
                { id: 2, nome: 'Carlos', idade: 22 },
                { id: 3, nome: 'Daniel', idade: 40 },
                { id: 4, nome: 'Ema', idade: 17 },
                { id: 5, nome: 'Lia', idade: 28 }
            ]
        }
    }
}
</script>

<style>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;

	display: flex;
	font-size: 2rem;
}

#app div {
	margin: 20px;
}
</style>

<!--

1) O App.vue faz referencia para <usuario-lista /> e <usuario-detalhe />, passa-se o array de usuarios
(linha 17 a 22) por parâmetro e o <usuario-lista /> amarra

2) No UsuarioLista.vue poe-se props: { usuarios: Array } dentro do exports defaults para poder puxar e
amarrar, após isso ainda no UsuarioLista.vue faz-se um for (L11) encima da propiedade usuarios para 
popular

3) Cria-se o barramento, importa o vue e no export cria-se métodos como setUsuarioSelecionado(), que
recebe o usuário e emite o usuário selecionado, tambem cria-se o método onUsuarioSelecionado para
ficar escutando atraves de callback sempre que acontecer um evento do tipo usuarioSelecionado,
o callback poe no segundo parâmetro para passar para o $on, portanto sempre que acontecer o evento
definido no primeiro parâmetro o segundo parâmetro é chamado

4) Em usuarioLista importa-se o barramento usando @ que é caminho absoluto
usuarioLista é o usuario que irá disparar o evento ao clicar e a outra coluna será notificada pra
mostrar o usuário selecionado

5) Em usuarioLista cria-se métodos dentro do export como setUsuarioSelecionado(usuario) e chama o
barramento para passar o usuario selecionado usuario como parâmetro, porem para que o usuário seja
recebido através do método é necessário colocar o @click="setUsuarioSelecionado(usuario)" ainda no
UsuarioDetalhe.vue na parte do <tbody>> <tr> poe-se usuario para amarrar e ele fazer o for, assim
a parte de geração de evento do usuarioLista está funcionando

6) No componente usuarioDetalhe importa-se o barramento, cria-se aqui o método created() para
associar ao componente a função que será chamada sempre que o evento acontecer, entao

					barramento.onUsuarioSelecionado(usuario => {
						this.usuario = usuario
					})

barramento.onUsuarioSelecionado RECEBE AQUELA CALLBACK do barramento.js, que tem como parâmetro 
usuario e encima desse usuário selecionado deve-se setar o dado interno:					


										data() {
											return {
												usuario: null
											}
										},
do meu componente para refletir o usuário selecionado, mesmo mudando o meu dado interno automaticamente
o template (Em UsuarioDetalhe.vue)... aquela parte em html irá refletir essas mudanças									
-->