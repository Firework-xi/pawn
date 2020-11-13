import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLlogin: true,
    data: ['home']
  },
  mutations: {
    setIsLogin (state, data) {
      state.isLogin = data
      localStorage.setItem('token', data)
    },
    adddata (state, datares) {
      if (!state.data.includes(datares)) {
        state.data.push(datares)
      }
    },
    delees (state, datares) {
      const index = state.data.indexOf(datares)
      if (index !== -1) {
        state.data.splice(index, 1)
      }
    }
  },
  actions: {},
  modules: {}
})
