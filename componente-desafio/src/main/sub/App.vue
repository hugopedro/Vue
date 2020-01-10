<template>
	<v-app>
		<Menu />
		<Toolbar />
		<v-content>
			<Carousel />
		</v-content>
		<Footer />
	</v-app>
</template>

<script> // o @ é pra acessar o caminho absoluto (src)

import Carousel from '@/components/widgets/Carousel.vue'
import Footer from '@/components/template/Footer.vue'
import Toolbar from '@/components/template/Toolbar.vue'
import Menu from '@/components/template/Menu.vue'

export default {	
		components: {Footer, Carousel, Toolbar, Menu }, 
}
</script>