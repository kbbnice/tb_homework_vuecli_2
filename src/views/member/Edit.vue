<template>
  <div class="member-edit">
    <el-dialog title="编辑老师" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="姓名">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="form.sex" placeholder="请选择性别">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="工号">
          <el-input v-model="form.teacherId" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="工龄">
          <el-input v-model="form.teachYear" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        id: 0,
        name: '王小虎',
        teachYear: 30,
        address: '上海市普陀区金沙江路 1518 弄',
        sex: 1,
        teacherId: 'T-10000',
      },
    }
  },
}
</script>