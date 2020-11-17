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

    // 获取课程
    getCourseList(state, params) {
      state.courseList = params
    },

    // 添加课程
    addCourse(state, params) {
      state.courseList.unshift(params)
    },

    // 移除课程
    removeCourse(state, params) {
      state.courseList.splice(params.index, 1)
    } 

  },
  actions: {

    getCourseListCommit(context, params) {
      return context.commit('getCourseList', params)
    },

    submitAddCourse(context, params) {
      return context.commit('addCourse', params)

    },

    removeCourseCommit(context, params) {
      return context.commit('removeCourse', params)
    }

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