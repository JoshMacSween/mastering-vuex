import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 'abc123', name: 'Josh MacSween' },
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    todos: [
      { id: 1, text: 'Bleep', done: true },
      { id: 2, text: 'Blop', done: false },
      { id: 3, text: 'Boop', done: true },
      { id: 4, text: 'Blorp', done: false }
    ]
  }, // mutations, actions & getters are all outside of state
  mutations: {},
  actions: {},
  getters: {
    catLength: state => {
      return state.categories.length
    },
    activeTodosCount: state => {
      return state.todos.filter(todo => !todos.done).length
    }
  }
})
