import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    cart: [],
  },
  getters: {
    getUser: (state) => state.user,
    getCart: (state) => state.cart,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    CLEAR_USER(state) {
      state.user = {};
    },
    SET_CART(state, cart) {
      state.cart = cart;
    },
    CLEAR_CART(state) {
      state.cart = [];
    },
    ADD_TO_CART(state, itemID) {
      state.cart.push(itemID);
    },
    REMOVE_FROM_CART(state, itemID) {
      state.cart = state.cart.filter((item) => item !== itemID);
    },
  },
  actions: {
    setUser({ commit }, user) {
      commit("SET_USER", user);
    },
    clearUser({ commit }) {
      commit("CLEAR_USER");
    },
    setCart({ commit }, cart) {
      commit("SET_CART", cart);
    },
    clearCart({ commit }) {
      commit("CLEAR_CART");
    },
    addToCart({ commit }, itemID) {
      commit("ADD_TO_CART", itemID);
    },
    removeFromCart({ commit }, itemID) {
      commit("REMOVE_FROM_CART", itemID);
    },
  },
});
