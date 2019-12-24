import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    token: null,
    isUserLoggedIn: !!localStorage.getItem('token'),
  },
  mutations: {
    setToken(state, token) {
      this.state.token = token;
      if (token) {
        this.state.isUserLoggedIn = true;
        localStorage.setItem('token', token);
      } else {
        this.state.isUserLoggedIn = false;
        localStorage.removeItem('token', token);
      }
    },
    setUser(state, user) {
      this.state.user = user;
    },
  },
  actions: {
    setToken({ commit }, token) {
      commit('setToken', token);
    },
    setUser({ commit }, user) {
      commit('setUser', user);
    },
  },
});
