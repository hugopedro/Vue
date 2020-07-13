<template>
	<div id="app">
		<h1>Tarefas</h1>
		<!-- atencao com o case sensitive, a linha 7 ta passando como propiedade a lista de tasks-->
		<TaskProgress :progress="progress" />
		<NewTask @taskAdded="addTask" />
		<TaskGrid :tasks="tasks"
		@taskDeleted="deleteTask" 
		@taskStateChanged="toggleTaskState" /> <!-- muita atenção no case sensitive, se colocasse taskstateChanged ia ser dificil de detectar o erro! -->
	</div>
</template>

<script>
import TaskProgress from './components/TaskProgress.vue'
import NewTask from './components/NewTask.vue'
import TaskGrid from './components/TaskGrid.vue'


export default {
	components: { TaskProgress, NewTask, TaskGrid },
	data() {
		return {
			tasks: []
			//agora já é possivel criar task dinamicamente
		}
	},
	computed: {
		// é preciso passar o TaskProgress como propiedade para o componente
			progress() {
				const total = this.tasks.length
				const done = this.tasks.filter(t => !t.pending).length
				return Math.round(done / total * 100) || 0
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
		},
		toggleTaskState(i) { //se tiver pendente ele coloca falso se nao verdadeiro
			this.tasks[i].pending = !this.tasks[i].pending
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
