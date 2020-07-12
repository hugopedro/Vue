<template>
	<div id="app">
		<h1>Tarefas</h1>
		<NewTask @taskAdded="addTask" />
		<TaskGrid @taskDeleted="deleteTask" :tasks="tasks"/> <!-- atencao com o case sensitive -->
	</div>
</template>

<script>
import NewTask from './components/NewTask.vue'
import TaskGrid from './components/TaskGrid.vue'


export default {
	components: { NewTask, TaskGrid },
	data() {
		return {
			tasks: []
			//agora já é possivel criar task dinamicamente
		}
	},
	methods: {
		addTask(task) {
			const sameName = t => t.name === task.name
			const reallyNew = this.tasks.filter(sameName).length == 0 //verifica se nenhum elemento tem o mesmo nome
			// ^filtre todas as tasks que tem o mesmo nome, se o array final for vazio quer dizer que nao tem task igual
			if (reallyNew) {
				this.tasks.push({
					name: task.name,
					pending: task.pending ||  true // se nao tiver task.pending por padrao a task estará pendente (true) ou é o valor default
				})
			}
		},
		deleteTask(i) {
			this.tasks.splice( i , 1 )
		}
	}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
