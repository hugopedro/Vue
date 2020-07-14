<template>
	<Rotulo nome="Nome completo">
		<input type="text" v-model="usuario.nomeCompleto">
	</Rotulo>
</template>

<script>

import Rotulo from './Rotulo.vue'
export default {
    components: { Rotulo },
}
</script>

<style>

</style>