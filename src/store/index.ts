import { createStore } from 'vuex'

export default createStore({
  state: {
    menuOpen: false
  },
  mutations: {
    menuOpen(state, payload) {
      state.menuOpen = payload.menuOpen
    }
  },
  actions: {},
  modules: {}
})
