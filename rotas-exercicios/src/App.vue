<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
		<router-view name="menu"></router-view>
		<router-view /> <!-- isso fará com que seja carregado os componentes do router.js, e usará os paths definidos de lá-->
		<router-view name="menuInferior"></router-view>
	</div>
</template>

<script>

export default {
	
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
