import Vue from 'vue'
import Vuex from 'vuex'
import Mock from 'mockjs'
import axios from 'axios'

Vue.use(Vuex)

let studentList = []
let teacherList = []

const myVuex = new Vuex.Store({
  state: {
    curPath: '个人中心/个人信息',
    studentList: [],
    teacherList: []
  },
  mutations: {
    changePath(state, param) {
      return state.curPath = param
    },

    // 创建学生
    createStudent(state, param) {
      return state.studentList = param
    },

    // 编辑学生
    editStudent(state, param) {
      state.studentList.splice(param.index, 1, param.form)
    },

    // 删除学生
    deleteStudent(state, param) {
      return state.studentList.splice(param.index,1)
    },

    // 创建老师
    createTeacher(state, param) {
      return state.teacherList = param
    },

    // 编辑老师
    editTeacher(state, param) {
      
      state.teacherList.splice(param.index, 1, param.form)
    },

    // 删除老师
    deleteTeacher(state, param) {
      return state.teacherList.splice(param.index,1)
    }
  },
  actions: {
    changePathFun(context, param) {
      return context.commit('changePath', param)
    },

    createStudentFun(context, param) {
      return context.commit('createStudent', param)
    },

    editStudentFun(context, param) {
      return context.commit('editStudent', param)
    },
    deleteStudentFun(context, param) {
      return context.commit('deleteStudent', param)
    },
    createTeacherFun(context, param) {
      return context.commit('createTeacher', param)
    },

    editTeacherFun(context, param) {
      return context.commit('editTeacher', param)
    },
    deleteTeacherFun(context, param) {
      return context.commit('deleteTeacher', param)
    },
  },
  modules: {

  }
})

export default myVuex

getStudentData()
function getStudentData() {
  let that = this

  let mockTableData = Mock.mock({
    status: 200,
    'data|5-30': [
      {
        'id|+1': 1,
        name: '@cname',
        date: '@date("yyyy-MM-dd")',
        address: '@county(true)',
        'sex|0-1': 0,
        'studentId|500000000-599999999': 500000000,
      },
    ],
  })

  Mock.mock('/getStudentData', {
    data: mockTableData,
  })

  axios.get('/getStudentData').then((res) => {
    studentList = res.data.data.data
    myVuex.dispatch('createStudentFun', studentList)

  })
}

getTeacherData()
function getTeacherData() {
  let that = this

  let mockTableData = Mock.mock({
    status: 200,
    'data|5-30': [
      {
        'id|+1': 1,
        name: '@cname',
        'teachYear|0-20': 3,
        address: '@county(true)',
        'sex|0-1': 0,
        teacherId: 'T-' + '@integer(10001, 99999)',
      },
    ]
  })

  Mock.mock('/getTeacherData', {
    data: mockTableData,
  })

  axios.get('/getTeacherData').then((res) => {
    teacherList = res.data.data.data
    myVuex.dispatch('createTeacherFun', teacherList)

  })
}