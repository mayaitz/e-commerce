import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
  },
  getters: {
    getUser: (state) => state.user,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    CLEAR_USER(state) {
      state.user = {};
    },
  },
  actions: {
    setUser({ commit }, user) {
      commit("SET_USER", user);
    },
    clearUser({ commit }) {
      commit("CLEAR_USER");
    },
  },
});
