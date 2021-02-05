const actions = {
    addTask (context, task) {
        //...ajax
        context.commit('ADD_TASK', task)
    }
}

export default actions