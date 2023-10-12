import { createStore } from 'vuex'

export default createStore({
  state: {
    modalActive: false,
    apiHost: 'http://192.168.0.151',
    apiPort: '5000',
    apiUrl: 'https://muvir-api.onrender.com/api/'
  },
  mutations: {
    changeModal(state) {
      state.modalActive = !state.modalActive
    },
    closeModal(state) {
      state.modalActive = false
    },
  },
  actions: {
  },
  modules: {
  }
})
