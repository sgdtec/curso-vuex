<template>
  <div id="app">

    <router-link to="/">Home</router-link>
    <router-link to="/tasks">Tarefas [{{totalTaskCompleted}}/{{totalTaskNotComputed}}]</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  },
  computed: {
    totalTaskNotComputed () {
      return this.$store.getters.getTaskNotComputed.length
    },
    totalTaskCompleted () {
      return this.$store.getters.sortedTasks.length
    }
  }
}
</script>

<style>

</style>
