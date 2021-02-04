import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tasks:[
            {name: 'Lavar Carro', completed: false},
            {name: 'Lavar Motor', completed: false},
            {name: 'Lavar Banheiro', completed: false},
            {name: 'Lavar Horse', completed: false},
            {name: 'Lavar Cronos', completed: false},
            {name: 'Lavar Bike', completed: false},
            {name: 'Lavar Monkey', completed: false},
        ],
    }, mutations: {
        ADD_TASK (state, task) {
            state.tasks.push(task)
        },
        TOOGLE_TASK (state, task) {
            task.completed = !task.completd
        }
    },
    actions: {
        addTask (context, task) {
            //...ajax
            context.commit('ADD_TASK', task)
        }
    },
    getters: {
        sortedTasks (state) {
            let sorted = state.tasks 
               return sorted.sort((a, b) => {
                  if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
                  if (a.name.toLowerCase() > b.name.toLowerCase()) return 1

                  return 0
            })
        }
    }
})


