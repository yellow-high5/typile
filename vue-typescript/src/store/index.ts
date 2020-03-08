import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [{ id: 1, name: "study react", active: true }],
    visibilityFilter: "all"
  },
  mutations: {
    addTodo(state, payload) {
      state.todos.push({
        id: payload.id,
        name: payload.todo,
        active: true
      });
    },
    toggleActive(state, payload) {
      state.todos[payload.key].active = !state.todos[payload.key].active;
    },
    togglevisibilityFilter(state, payload) {}
  },
  modules: {}
});
