<template>
  <div class="course-add">
    <el-form label-width="80px">
      <el-form-item label="课程ID">
        <el-input v-model="form.id" maxlength="6" @input="checkId"></el-input>
      </el-form-item>
      <el-form-item label="课程名称">
        <el-input v-model="form.course"></el-input>
      </el-form-item>
      <el-form-item label="课程描述">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item class="right">
        <el-button @click="reset">重置</el-button>
        <el-button type="primary" @click="submit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        id: "",
        course: "",
        desc: "",
      },
    };
  },
  methods: {
    // 重置
    reset() {
      for (let key in this.form) {
        this.form[key] = "";
      }
    },

    // 提交
    submit() {
      if (this.form.course.length === 0 || this.form.id.length === 0) {
        this.$message({
          message: "课程ID或课程名称不能为空！",
          type: "error",
        });
        return;
      }

      if(this.form.desc.length === 0) {
        this.form.desc = "暂无课程描述"
      }
      this.$store.dispatch("submitAddCourse", this.form);
      this.$router.push("/course/list");
    },

    // 验证id长度
    checkId() {
      this.form.id = this.form.id.replace(/[^0-9]/g, "");
    },
  },
  created() {},
};
</script>

<style lang="less">
.course-add {
  .el-form {
    width: 500px;
    .el-textarea__inner {
      height: 300px;
    }
    .right {
      text-align: right;
    }
  }
  /*添加css样式*/
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
}
</style>