import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    curPath: '/'
  },
  mutations: {
    changePath(curPath, param) {
      curPath = param
    }
  },
  actions: {
    changePathFun(context, param) {
      context.commit('changePath', param)

    }
  },
  modules: {

  }
})
