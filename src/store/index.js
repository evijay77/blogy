import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authToken: "",
    name: "",
    email: "",
    avatar: ""
  },

  getters: {
  getAuthToken: state => state.authToken,
  getUser: state => state
  },

  mutations: {
    setUser(state, payload) {
    state.authToken = payload.authToken;
    state.name = payload.name;
    state.email = payload.email;
    state.avatar = payload.avatar;
    localStorage.setItem(
      "user",
      JSON.stringify({
        authToken: payload.authToken,
        name: payload.name,
        email: payload.email,
        avatar: payload.avatar
      })
    );

    localStorage.setItem("token",payload.authToken)
  }
  },

  actions: {
    login: ({ commit }, payload) => {
    commit({
      type: "setUser",
      authToken: payload.authToken,
      name: payload.name,
      email: payload.email,
      avatar: payload.avatar
    });
  },
  logout: ({ commit }) => {
    commit({
      type: "setUser",
      authToken: "",
      name: "",
      email: "",
      avatar: "",
    });
    localStorage.removeItem("user");
  }
  },
  
  modules: {
  }
})
