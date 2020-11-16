import Vue from 'vue'
import Vuex from 'vuex'
import Mock from 'mockjs'
import axios from 'axios'
import { fetchCourse } from '../mock'

Vue.use(Vuex)



const defaultVuex = new Vuex.Store({
  state: {
    courseList: []
  },
  mutations: {

    getCourseList(state, params) {
      state.courseList = params
    },

  },
  actions: {


    getCourseListCommit(context, param) {
      return context.commit('getCourseList', param)
    },

  },
  modules: {

  }
})

export default defaultVuex

getStudentData()
function getStudentData() {
  let that = this

  fetchCourse()

  axios.get('/fetchCourse').then((res) => {

    console.log(res.data.data)

    defaultVuex.dispatch('getCourseListCommit', res.data.data)

  })
}