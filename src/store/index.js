import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLlogin: true
  },
  mutations: {
    setIsLogin(state, data) {
      state.isLogin = data
      localStorage.setItem('token', data)
    }
  },
  actions: {},
  modules: {}
})
