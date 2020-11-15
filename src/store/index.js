import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    curPath: '/'
  },
  mutations: {
    changePath(state, param) {
     return state.curPath = param.meta.parentTitle + "/" + param.meta.title
    }
  },
  actions: {
    changePathFun(context, param) {
      return context.commit('changePath', param)
    }
  },
  modules: {

  }
})
