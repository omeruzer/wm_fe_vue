import Vue from 'vue'
import Vuex from 'vuex'
import auth from "./modules/auth"
import axios from "axios";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: []
  },
  getters: {
    GET_LIST(state) {
      return state.list
    }
  },
  mutations: {
    LIST(state, data) {
      state.list = data
    }
  },
  actions: {
    LIST(context, model) {
      axios.post('http://localhost:8000/api/' + model)
        .then((result) => {
          context.commit('LIST', result.data)
        }).catch((err) => {

        });
    }
  },
  modules: {
    auth
  }
})