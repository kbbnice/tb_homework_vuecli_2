<template>
  <div class="my-menu">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#5f35d1"
      text-color="#fff"
      @select="handleSelect"
      active-text-color="rgb(126, 189, 255)"
      :unique-opened="true"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>成员管理</span>
        </template>
        <el-menu-item index="/member/teacher">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>老师列表</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/member/student">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>学生列表</span>
          </template>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>课程管理</span>
        </template>

        <el-menu-item index="/course/required">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>必修课</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/course/elective">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>选修课</span>
          </template>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  methods: {
    handleSelect(param) {
      this.$router.push(param)
    this.$store.dispatch('changePathFun', this.$route)
      console.log(this.$route)
    },
  },
};
</script>

<style lang="less">
    .el-menu {
        width: 280px;
        overflow-x: hidden;
    }
</style>