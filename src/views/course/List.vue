<template>
  <div class="course-list">
    <el-form :inline="true" @submit.native.prevent>
      <el-form-item
        ><el-input v-model="input" placeholder="请输入课程或者课程id" v-on:keyup.enter="search"></el-input
      ></el-form-item>
      <el-form-item>
        <el-button type="primary" @click="search">查询</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column type="index" width="50"> </el-table-column>
      <el-table-column prop="course" label="课程名称" width="180">
      </el-table-column>
      <el-table-column label="课程ID" width="180">
        <template slot-scope="scope">
          <span>{{ "M" + scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="desc"
        label="课程描述"
        :cell-class-name="'text-left'"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: this.$store.state.courseList,
      input: "",
    };
  },
  computed: {
    tableDataDefault() {
      return this.$store.state.courseList;
    },
  },
  methods: {
    search() {
      let input = this.input;

      let isNull = true;
      this.tableData.map((item, index) => {
        if (item.id + "" == input.split("M").join("") || item.course == input) {
          this.tableData = [item];
          isNull = false;
          return;
        }
      });

      if (isNull) {
        this.tableData = this.$store.state.courseList;
        this.$message({
          type: "warning",
          message: "未找到该课程！",
        });
      }
    },
  },
  watch: {
    tableDataDefault(newValue) {
      this.tableData = newValue;
    },
  },
};
</script>

<style lang="less">
.course-list {
  .el-table .cell {
    text-align: center;
  }
  .el-table_1_column_4 .cell {
    text-align: left;
  }
}
</style>