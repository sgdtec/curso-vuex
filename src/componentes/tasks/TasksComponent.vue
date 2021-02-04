<template>
    <div>
        <h1 v-text="title"></h1>

        <task-add-component />

        <ul>
            <li v-for="(task, index) in getTasksSorted" :key="index"
                :class="{'completed' : task.completed}"
            >
                <button class="btn btn-primary" @click.prevent="completedTask(task)">Toogle</button>
                {{ task.name}}
            </li>
        </ul>
    </div>
</template>



<script>
import TaskAddComponent from './TaskAddComponent.vue'

export default {
    data () {
        return {
            title: 'Lista de Tarefas'
        }
    },
    methods: {
        completedTask (task) {
            this.$store.commit('TOOGLE_TASK', task)
        }
    },
    computed: {
        getTasks () {
            return this.$store.state.tasks
        },
        getTasksSorted () {
            return this.$store.getters.sortedTasks
        }
    },
    components: {
        TaskAddComponent
    }
}
</script>

<style scoped>
.completed {
    background: green;
}
</style>