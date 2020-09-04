import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authToken: ""
  },

  getters: {
  getAuthToken: state => state.authToken
  },

  mutations: {
    setUser(state, payload) {
    state.authToken = payload.authToken;
    localStorage.setItem(
      "user",
      JSON.stringify({
        authToken: payload.authToken
      })
    );
  }
  },

  actions: {
    login: ({ commit }, payload) => {
    commit({
      type: "setUser",
      authToken: payload.authToken,
    });
  },
  logout: ({ commit }) => {
    commit({
      type: "setUser",
      authToken: ""
    });
    localStorage.removeItem("user");
  }
  },
  
  modules: {
  }
})
