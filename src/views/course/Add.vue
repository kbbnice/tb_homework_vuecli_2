<template>
  <div class="member-student">
      <el-form :inline="true">
        <el-form-item></el-form-item>
      </el-form>

  </div>
</template>

<script>
const TABLE_DATA = [
  {
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄',
    sex: '男',
  },
]
export default {
  data() {
    return {
      dialogFormVisible: false,
      curEditIndex: 0,
      form: {
        id: '',
        name: '',
        teachYear: 0,
        address: '',
        sex: 1,
        teacherId: 'T-10000',
      },
    }
  },
  computed: {
    tableData() {
      return this.$store.state.studentList
    },
  },
  methods: {
    handleEdit(index, row) {
      this.form = JSON.parse(JSON.stringify(this.tableData[index]))
      this.form.sex = this.form.sex == 1 ? "男": "女"
      this.curEditIndex = index
      this.dialogFormVisible = true
    },

    submitEdit() {
      this.$store.dispatch('editStudentFun', {
        index: this.curEditIndex,
        form: this.form,
      })
      this.tableData[this.curEditIndex] = this.form
      this.dialogFormVisible = false
    },
    handleDelete(index, row) {
      console.log(index, row)
      this.$store.dispatch('deleteStudentFun', { index: index })
    },
  },
  created() {},
}
</script>